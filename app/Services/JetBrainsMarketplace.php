<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;

class JetBrainsMarketplace
{
    public function downloadNumber(): ?int
    {
        if (empty($this->result())) {
            return 0;
        }

        return $this->result()[0]['@attributes']['downloads'];
    }

    protected function result(): ?array
    {
        $url = "https://plugins.jetbrains.com/plugins/list?pluginId=14636";

        $body = Cache::remember('jetbrains.apiRequest', now()->addHour(), function () use ($url) {
            $response = Http::retry(3, 200)->contentType(
                "text/xml;charset=UTF-8"
            )->get($url);

            if ($response->failed()) {
                return null;
            }

            return $response->body();
        });

        if (empty($body)) {
            return [];
        }

        $xml = simplexml_load_string($body);
        $json = json_encode($xml);
        $data = json_decode($json, true);

        return $this->data($data);
    }

    protected function data(array $results): ?array
    {
        if (!isset($results['category']['idea-plugin'][0])) {
            return [];
        }

        return [
            $results['category']['idea-plugin'][0],
        ];
    }
}
