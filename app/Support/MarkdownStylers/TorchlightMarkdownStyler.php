<?php


namespace App\Support\MarkdownStylers;


use App\Contracts\MarkdownStyler;
use League\CommonMark\ConfigurableEnvironmentInterface;
use Torchlight\Commonmark\TorchlightExtension;

class TorchlightMarkdownStyler implements MarkdownStyler
{

    public function stylise(ConfigurableEnvironmentInterface $environment): void
    {
        $environment->addExtension(new TorchlightExtension());
    }
}
