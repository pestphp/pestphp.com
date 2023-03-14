<?php

namespace App\Http\Controllers;

use Illuminate\View\View;
use App\Support\Documentation;
use App\Services\JetBrainsMarketplace;
use Illuminate\Contracts\View\Factory;
use App\Services\VisualStudioMarketplace;
use Illuminate\Contracts\Foundation\Application;

class IDEPluginsController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param JetBrainsMarketplace $jetbrains
     * @param VisualStudioMarketplace $visualStudio
     * @param Documentation $docs
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
