<?php

namespace App\Http\Controllers;

use App\Services\JetBrainsMarketplace;
use App\Services\VisualStudioMarketplace;
use App\Support\Documentation;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\View\View;

class IDEPluginsController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  JetBrainsMarketplace  $jetbrains
     * @param  VisualStudioMarketplace  $visualStudio
     * @return Application|Factory|View
     */
    public function __invoke(Documentation $docs)
    {
        $document = $docs->get(config('site.defaultVersion'), 'editor-setup');

        $body = $document['html'];

        return view('ide', [
            'index' => $docs->getIndex(config('site.defaultVersion')),
            'body' => $body,
        ]);
    }
}
