<?php

namespace App\Services;

use Illuminate\Http\Client\PendingRequest;

class JetBrainsMarketplace
{

    public function fetch(string $buildId)
    {
        $url = "https://plugins.jetbrains.com/plugins/list?pluginId={$buildId}";

        $response = (new PendingRequest())->contentType('text/xml;charset=UTF-8')->get($url);

        if ($response->failed()) {
            return [
                "data" => null
            ];
        }

        $xml = simplexml_load_string($response->body());
        $json = json_encode($xml);
        $data = json_decode($json,TRUE);

        return $this->data($data);
    }

    protected function data($results)
    {
        if ( !isset($results['category']['idea-plugin'][0]) )
        {
            return [
                "data" => null
            ];
        }

        return [
            "data" => $results['category']['idea-plugin'][0],
        ];
    }

    public function downloadNumber
}