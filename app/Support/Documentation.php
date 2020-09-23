<?php

namespace App\Support;

use Illuminate\Filesystem\Filesystem;

class Documentation
{
    private Filesystem $filesystem;

    public function __construct(Filesystem $filesystem)
    {
        $this->filesystem = $filesystem;
    }

    public function exists(string $version, string $page): bool
    {
        return $this->filesystem->exists(resource_path("docs/{$version}/{$page}.md"));
    }

    public function getIndex(string $version): string
    {
        return $this->filesystem->get(resource_path("docs/{$version}/Documentation.md"));
    }


    public function get(string $version, string $page): string
    {
        return $this->filesystem->get(resource_path("docs/{$version}/{$page}.md"));
    }

    private function path(string $version, string $file): string
    {
        return resource_path("docs/{$version}/{$file}");
    }

}
