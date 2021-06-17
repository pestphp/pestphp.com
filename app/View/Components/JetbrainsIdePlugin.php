<?php

namespace App\View\Components;

use App\Services\JetBrainsMarketplace;

class JetbrainsIdePlugin extends IdePlugin
{
    public string $pluginId;

    public function __construct(string $title, string $logo, string $github, string $url, string $pluginId)
    {
        parent::__construct($title, $logo, $github, $url);

        $this->pluginId = $pluginId;

        $this->installs = (new JetBrainsMarketplace($this->pluginId))->downloadNumber();
    }
}
