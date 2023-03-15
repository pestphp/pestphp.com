<?php

namespace App\Services;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class VisualStudioMarketplace
{
    protected string $extension;

    public function __construct(string $extension)
    {
        $this->extension = $extension;
    }

    public function downloadNumber(): int
    {
        $statistics = collect($this->result()['statistics']);

        $downloadCount = $statistics->first(fn ($value) => $value['statisticName'] === 'install');

        return $downloadCount['value'];
    }

    protected function result()
    {
        $url = 'https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery/';

        $requestBody = [
            'filters' => [
                [
                    'criteria' => [
                        [
                            'filterType' => 7,
                            'value' => $this->extension,
                        ],
                    ],
                ],
            ],
            'flags' => 914,
        ];

        $data = Cache::remember("vsmarketplace.apiRequest.$this->extension", now()->addHour(), function () use ($url, $requestBody) {
            $response = Http::withBody(
                json_encode($requestBody),
                'application/json'
            )->withHeaders([
                'Accept' => 'application/json;api-version=3.0-preview.1',
            ])->post($url);

            if ($response->failed()) {
                return null;
            }

            return $response->json();
        });

        return $this->data($data);
    }

    protected function data($results): array
    {
        if (! isset($results['results'])) {
            return [];
        }

        if (! isset($results['results'][0]['extensions'][0])) {
            return [];
        }

        if (! isset($results['results'][0]['extensions'][0]['statistics'])) {
            return [];
        }

        return $results['results'][0]['extensions'][0];
    }
}
