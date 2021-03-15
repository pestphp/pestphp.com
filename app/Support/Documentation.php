<?php

namespace App\Support;

use Illuminate\Filesystem\Filesystem;
use Illuminate\Contracts\Cache\Repository as Cache;
use League\CommonMark\CommonMarkConverter;
use Spatie\YamlFrontMatter\Document;
use Spatie\YamlFrontMatter\YamlFrontMatter;

class Documentation
{
    protected Filesystem $filesystem;

    protected Cache $cache;

    protected MarkdownParser $markdownParser;

    public function __construct(Filesystem $filesystem, Cache $cache, MarkdownParser $markdownParser)
    {
        $this->filesystem = $filesystem;
        $this->cache = $cache;
        $this->markdownParser = $markdownParser;
    }

    public function getIndex(string $version): ?string
    {
        return $this->cache->remember("docs.{$version}.index", 5, function () use ($version) {
            $path = $this->path($version, 'documentation.md');

            if ($this->exists($version, 'documentation')) {
                return (new MarkdownParser())->convertToHtml($this->filesystem->get($path));
            }

            return null;
        });
    }

    protected function path(string $version, string $file): string
    {
        return resource_path("docs/{$version}/{$file}");
    }

    public function exists(string $version, string $page): bool
    {
        return $this->filesystem->exists($this->path($version, "{$page}.md"));
    }

    public function get(string $version, string $page): array
    {
        return $this->cache->remember("docs.{$version}.{$page}", 5, function () use ($page, $version) {
            $path = $this->path($version, "{$page}.md");

            if ($this->exists($version, $page)) {
                $contents = YamlFrontMatter::parse($this->filesystem->get($path));
                return [
                    'matter' => $contents->matter(),
                    'markdown' => $contents->body(),
                    'html' => $this->markdownParser->convertToHtml($contents->body()),
                ];
            }

            return null;
        });
    }

}
