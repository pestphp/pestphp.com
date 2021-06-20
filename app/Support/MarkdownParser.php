<?php

namespace App\Support;

use League\CommonMark\Environment;
use League\CommonMark\CommonMarkConverter;
use Torchlight\Commonmark\TorchlightExtension;
use League\CommonMark\Extension\Table\TableExtension;
use League\CommonMark\Extension\Autolink\AutolinkExtension;
use League\CommonMark\Extension\TaskList\TaskListExtension;
use League\CommonMark\Extension\Strikethrough\StrikethroughExtension;
use League\CommonMark\Extension\DisallowedRawHtml\DisallowedRawHtmlExtension;

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
        $environment->addExtension(new TorchlightExtension());

        $converter = new CommonMarkConverter([], $environment);

        return $converter->convertToHtml($markdown);
    }
}
