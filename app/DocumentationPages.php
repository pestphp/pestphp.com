<?php

namespace App;

class DocumentationPages
{
    private const DEFAULT_VERSION = "master";

    private $pages = [
        "master" => [
            "Getting Started" => [
                "Installation"         => "installation",
                "Writing Tests"        => "writing-tests",
                "Underlying Test Case" => 'underlying-test-case',
                "Assertions"           => 'assertions',
                "Expectations"         => 'expectations',
                "Setup And Teardown"   => 'setup-and-teardown',
                'Higher Order Tests'   => 'higher-order-tests',
                'Custom Helpers'       => 'helpers',
                'Exceptions & Errors'  => 'exceptions-and-errors',
                'Groups Of Tests'      => 'groups',
                'Skipping Tests'       => 'skipping-tests',
                'Datasets'             => 'datasets',
                'Coverage'             => 'coverage',

            ],
            'Guides' => [
                'PHPUnit'           => 'guides/phpunit',
                'Drift'             => 'guides/drift',
                'Laravel'           => 'guides/laravel',
                'Symfony'           => 'guides/symfony',
                'Pest From Scratch' => 'guides/pest-from-scratch',
                'Creating Plugins'  => 'guides/plugins',
            ],
            'Plugins' => [
                'Laravel'           => 'plugins/laravel',
                'Livewire'          => 'plugins/livewire',
                'Faker'             => 'plugins/faker',
                'Global Assertions' => 'plugins/global-assertions',
                'Snapshots'         => 'plugins/snapshots',
            ],
            'More' => [
                'Changelog'     => 'changelog',
                'Upgrade Guide' => 'upgrade-guide',

            ],
            'Get involved' => [
                'Community'  => 'community',
                'Contribute' => 'contribute',
                'Team'       => 'team',
            ],
        ],
    ];

    public function navigation(string $version = "")
    {
        if (empty($empty)) {
            return $this->pages[static::DEFAULT_VERSION];
        }
        
        return $this->pages[$version];
    }
}
