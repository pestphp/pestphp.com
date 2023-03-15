<?php

namespace App\Support;

use App\Contracts\MarkdownStyler;
use League\CommonMark\ConfigurableEnvironmentInterface;
use League\CommonMark\Environment;
use League\CommonMark\CommonMarkConverter;
use League\CommonMark\Extension\HeadingPermalink\HeadingPermalinkExtension;
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
     * @param array{enable_heading_permalinks?: bool} $config
     * @return string
     */
    public function convertToHtml(string $markdown, array $config = [])
    {
        $environment = Environment::createCommonMarkEnvironment();

        $this->addDefaultExtensions($environment, $config);
        $this->markdownStyler->stylise($environment);

        $converter = new CommonMarkConverter([
            'heading_permalink' => [
                'html_class' => 'heading-permalink mr-2',
                'inner_contents' => '#',
            ]
        ], $environment);

        return $converter->convertToHtml($markdown);
    }

    private function addDefaultExtensions(ConfigurableEnvironmentInterface $environment, array $config = [])
    {
        if ($config['enable_heading_permalinks'] ?? true) {
            $environment->addExtension(new HeadingPermalinkExtension());
        }

        $environment->addExtension(new AutolinkExtension());

        // $environment->addExtension(new DisallowedRawHtmlExtension());

        $environment->addExtension(new StrikethroughExtension());
        $environment->addExtension(new TableExtension());
        $environment->addExtension(new TaskListExtension());
    }
}
