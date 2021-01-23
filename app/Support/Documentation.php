<?php

namespace App\Support;

use Illuminate\Filesystem\Filesystem;
use Illuminate\Contracts\Cache\Repository as Cache;
use League\CommonMark\CommonMarkConverter;

class Documentation
{
    protected Filesystem $filesystem;

    protected Cache $cache;

    public function __construct(Filesystem $filesystem, Cache $cache)
    {
        $this->filesystem = $filesystem;
        $this->cache = $cache;
    }

    public function exists(string $version, string $page): bool
    {
        return $this->filesystem->exists($this->path($version, "{$page}.md"));
    }

    public function getIndex(string $version): ?string
    {
        return $this->cache->remember("docs.{$version}.index", 5, function () use ($version) {
            $path = $this->path($version, 'documentation.md');

            if ($this->exists($version, 'documentation')) {
                return (new CommonMarkConverter())->convertToHtml($this->filesystem->get($path));
            }

            return null;
        });
    }

    public function get(string $version, string $page): string
    {
        return $this->filesystem->get($this->path($version, "{$page}.md"));
    }

    protected function path(string $version, string $file): string
    {
        return resource_path("docs/{$version}/{$file}");
    }

}
