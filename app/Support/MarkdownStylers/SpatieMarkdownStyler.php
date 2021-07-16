<?php


namespace App\Support\MarkdownStylers;


use App\Contracts\MarkdownStyler;
use League\CommonMark\Block\Element\FencedCode;
use League\CommonMark\Block\Element\IndentedCode;
use League\CommonMark\ConfigurableEnvironmentInterface;
use Spatie\CommonMarkHighlighter\FencedCodeRenderer;
use Spatie\CommonMarkHighlighter\IndentedCodeRenderer;

class SpatieMarkdownStyler implements MarkdownStyler
{
    const LANGUAGES = ['php', 'bash', 'shell', 'json', 'diff'];

    public function stylise(ConfigurableEnvironmentInterface $environment): void
    {
        $environment->addBlockRenderer(FencedCode::class, new FencedCodeRenderer(static::LANGUAGES));
        $environment->addBlockRenderer(IndentedCode::class, new IndentedCodeRenderer(static::LANGUAGES));
    }
}
