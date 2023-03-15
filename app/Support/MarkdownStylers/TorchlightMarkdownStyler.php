<?php

namespace App\Support\MarkdownStylers;

use App\Contracts\MarkdownStyler;
use League\CommonMark\Environment\Environment;
use Torchlight\Commonmark\V2\TorchlightExtension;

class TorchlightMarkdownStyler implements MarkdownStyler
{
    public function stylise(Environment $environment): void
    {
        $environment->addExtension(new TorchlightExtension());
    }
}
