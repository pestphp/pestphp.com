<?php

namespace App\View\Components;

use App\Services\VisualStudioMarketplace;

class VsCodeIdePlugin extends IdePlugin
{
    public string $extension;

    public function __construct(string $title, string $logo, string $github, string $url, string $extension)
    {
        parent::__construct($title, $logo, $github, $url);

        $this->extension = $extension;

        $this->installs = (new VisualStudioMarketplace($this->extension))->downloadNumber();
    }
}
