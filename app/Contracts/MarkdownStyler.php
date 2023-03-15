<?php

namespace App\Contracts;

use League\CommonMark\Environment\Environment;

interface MarkdownStyler
{
    public function stylise(Environment $environment): void;
}
