<?php

namespace App\Support;

use App\Contracts\MarkdownStyler;
use League\CommonMark\ConfigurableEnvironmentInterface;
use League\CommonMark\Environment;
use League\CommonMark\CommonMarkConverter;
use League\CommonMark\Extension\Table\TableExtension;
use League\CommonMark\Extension\Autolink\AutolinkExtension;
use League\CommonMark\Extension\TaskList\TaskListExtension;
use League\CommonMark\Extension\Strikethrough\StrikethroughExtension;
use League\CommonMark\Extension\DisallowedRawHtml\DisallowedRawHtmlExtension;

class MarkdownParser
{
    protected MarkdownStyler $markdownStyler;

    public function __construct(MarkdownStyler $markdownStyler)
    {
        $this->markdownStyler = $markdownStyler;
    }

    /**
     * Converts CommonMark to HTML.
     *
     * @param string $markdown
     * @return string
     */
    public function convertToHtml(string $markdown)
    {
        $environment = Environment::createCommonMarkEnvironment();

        $this->addDefaultExtensions($environment);
        $this->markdownStyler->stylise($environment);

        $converter = new CommonMarkConverter([], $environment);

        return $converter->convertToHtml($markdown);
    }

    private function addDefaultExtensions(ConfigurableEnvironmentInterface $environment)
    {
        $environment->addExtension(new AutolinkExtension());
        $environment->addExtension(new DisallowedRawHtmlExtension());
        $environment->addExtension(new StrikethroughExtension());
        $environment->addExtension(new TableExtension());
        $environment->addExtension(new TaskListExtension());
    }
}
