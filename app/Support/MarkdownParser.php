<?php

namespace App\Support;

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

class MarkdownParser
{
    /**
     * Converts CommonMark to HTML.
     *
     * @param string $markdown
     * @return string
     */
    public function convertToHtml(string $markdown)
    {
        $environment = Environment::createCommonMarkEnvironment();

        $environment->addExtension(new AutolinkExtension());
        $environment->addExtension(new DisallowedRawHtmlExtension());
        $environment->addExtension(new StrikethroughExtension());
        $environment->addExtension(new TableExtension());
        $environment->addExtension(new TaskListExtension());

        $languages = ['php', 'bash', 'shell', 'json', 'diff'];

        $environment->addBlockRenderer(FencedCode::class, new FencedCodeRenderer($languages));
        $environment->addBlockRenderer(IndentedCode::class, new IndentedCodeRenderer($languages));

        $converter = new CommonMarkConverter([], $environment);

        return $converter->convertToHtml($markdown);
    }
}
