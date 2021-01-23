<?php

namespace App\Http\Controllers;

use Illuminate\View\View;
use App\Support\Parsedown;
use App\Support\Documentation;
use Illuminate\Http\RedirectResponse;
use Illuminate\Contracts\View\Factory;
use League\CommonMark\Block\Element\FencedCode;
use League\CommonMark\Block\Element\IndentedCode;
use League\CommonMark\CommonMarkConverter;
use League\CommonMark\Environment;
use League\CommonMark\Extension\Autolink\AutolinkExtension;
use League\CommonMark\Extension\DisallowedRawHtml\DisallowedRawHtmlExtension;
use League\CommonMark\Extension\Strikethrough\StrikethroughExtension;
use League\CommonMark\Extension\Table\TableExtension;
use League\CommonMark\Extension\TaskList\TaskListExtension;
use Spatie\CommonMarkHighlighter\FencedCodeRenderer;
use Spatie\CommonMarkHighlighter\IndentedCodeRenderer;
use Spatie\YamlFrontMatter\YamlFrontMatter;
use Illuminate\Contracts\Foundation\Application;

class DocsController extends Controller
{
    protected const DEFAULT_PAGE = 'installation';
    protected const EXCLUDED = ['readme', 'license'];

    /**
     * Handle the incoming request.
     *
     * @param Documentation $docs
     * @param string|null $page
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

        $file = $docs->get(config('site.defaultVersion'), $page);
        $contents = YamlFrontMatter::parse($file);
        $matter = $contents->matter();
        $markdown = $contents->body();

        $environment = Environment::createCommonMarkEnvironment();
        // Remove any of the lines below if you don't want a particular feature
        $environment->addExtension(new AutolinkExtension());
        $environment->addExtension(new DisallowedRawHtmlExtension());
        $environment->addExtension(new StrikethroughExtension());
        $environment->addExtension(new TableExtension());
        $environment->addExtension(new TaskListExtension());

        $langs = ['php', 'bash', 'shell', 'json', 'diff'];

        $environment->addBlockRenderer(FencedCode::class, new FencedCodeRenderer($langs));
        $environment->addBlockRenderer(IndentedCode::class, new IndentedCodeRenderer($langs));

        $converter = new CommonMarkConverter([], $environment);

        $body = $converter->convertToHtml($markdown);

        return view('docs', compact('body', 'matter', 'markdown', 'page', 'index'));
    }
}
