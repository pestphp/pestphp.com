<?php

namespace App\Http\Controllers;

use App\Support\Documentation;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class DocsController extends Controller
{
    protected const DEFAULT_PAGE = 'installation';

    protected const EXCLUDED = ['readme', 'license'];

    /**
     * Handle the incoming request.
     *
     * @return Application|Factory|View|RedirectResponse
     */
    public function __invoke(Documentation $docs, string $page = null)
    {
        if ($page === null) {
            return redirect()->route('docs', [self::DEFAULT_PAGE]);
        }

        if (! $docs->exists(config('site.defaultVersion'), $page) || in_array($page, self::EXCLUDED)) {
            abort(404);
        }

        $index = $docs->getIndex(config('site.defaultVersion'));

        $document = $docs->get(config('site.defaultVersion'), $page);

        $matter = $document['matter'];
        $markdown = $document['markdown'];
        $body = $document['html'];

        return view('docs', compact('body', 'matter', 'markdown', 'page', 'index'));
    }
}
