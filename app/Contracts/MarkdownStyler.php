<?php

namespace App\Contracts;

use League\CommonMark\ConfigurableEnvironmentInterface;

interface MarkdownStyler
{
    public function stylise(ConfigurableEnvironmentInterface $environment): void;
}
