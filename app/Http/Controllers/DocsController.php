<?php

namespace App\Http\Controllers;

use App\Parsedown;
use App\Documentation;
use Illuminate\Http\Request;
use Spatie\YamlFrontMatter\YamlFrontMatter;

class DocsController extends Controller
{
    private const DEFAULT_VERSION = 'master';
    private const DEFAULT_PAGE = 'installation';
    private const EXCLUDED = ['readme', 'license'];
    
    /**
     * Handle the incoming request.
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Documentation $docs, string $page = null)
    {
        if ($page === null) {
            return redirect()->route('docs', [self::DEFAULT_PAGE]);
        }

        if (! $docs->exists(self::DEFAULT_VERSION, $page) || in_array($page, self::EXCLUDED)) {
            abort(404);
        }


        $file = $docs->get(self::DEFAULT_VERSION, $page);
        $contents = YamlFrontMatter::parse($file);
        $matter = $contents->matter();
        $markdown = $contents->body();

        $parsedown = new Parsedown();
        $body = $parsedown->text($markdown);

        // dd($parsedown->toc);

        // dd($parsedown);

        return view('docs', compact('body', 'matter', 'markdown', 'page'));
    }
}
