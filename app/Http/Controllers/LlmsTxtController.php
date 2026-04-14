<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Cache\Repository as Cache;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Http\Response;
use Illuminate\Support\Str;
use Spatie\YamlFrontMatter\YamlFrontMatter;

class LlmsTxtController extends Controller
{
    protected string $docsPath;

    public function __construct(
        protected Filesystem $filesystem,
        protected Cache $cache,
    ) {
        $this->docsPath = resource_path('docs/'.config('site.defaultVersion'));
    }

    public function index(): Response
    {
        $content = $this->cache->remember('llms.txt', 5, function () {
            return $this->generateIndex();
        });

        return response($content)->header('Content-Type', 'text/plain; charset=utf-8');
    }

    public function full(): Response
    {
        $content = $this->cache->remember('llms-full.txt', 5, function () {
            return $this->generateFull();
        });

        return response($content)->header('Content-Type', 'text/plain; charset=utf-8');
    }

    public function page(string $page): Response
    {
        $body = $this->getBody($page);

        if ($body === null) {
            abort(404);
        }

        $content = $this->cache->remember("llms.page.{$page}", 5, fn () => $body."\n");

        return response($content)->header('Content-Type', 'text/plain; charset=utf-8');
    }

    protected function generateIndex(): string
    {
        $sections = $this->parseSections();
        $baseUrl = 'https://pestphp.com';

        $lines = [];
        $lines[] = '# Pest';
        $lines[] = '';
        $lines[] = '> Pest is an elegant PHP testing framework with a focus on simplicity, designed to bring the joy of testing to PHP.';
        $lines[] = '';
        $lines[] = "- [Full Documentation]({$baseUrl}/llms-full.txt): Complete Pest documentation in a single file";
        $lines[] = '';

        $optionalPages = [];

        foreach ($sections as $section => $pages) {
            if (in_array($section, ['Press', 'More'])) {
                $optionalPages = array_merge($optionalPages, $pages);

                continue;
            }

            $lines[] = "## {$section}";
            $lines[] = '';

            foreach ($pages as $page) {
                $lines[] = $this->formatIndexEntry($page, $baseUrl);
            }

            $lines[] = '';
        }

        if ($optionalPages !== []) {
            $lines[] = '## Optional';
            $lines[] = '';

            foreach ($optionalPages as $page) {
                $lines[] = $this->formatIndexEntry($page, $baseUrl);
            }

            $lines[] = '';
        }

        return implode("\n", $lines);
    }

    protected function generateFull(): string
    {
        $sections = $this->parseSections();

        $parts = [];

        foreach ($sections as $pages) {
            foreach ($pages as $page) {
                $body = $this->getBody($page['slug']);

                if ($body !== null) {
                    $parts[] = $body;
                }
            }
        }

        return implode("\n\n---\n\n", $parts)."\n";
    }

    /**
     * @return array<string, list<array{slug: string, title: string}>>
     */
    protected function parseSections(): array
    {
        $indexPath = "{$this->docsPath}/documentation.md";
        $content = $this->filesystem->get($indexPath);

        $sections = [];
        $currentSection = '';
        $excluded = ['readme', 'license'];

        foreach (explode("\n", $content) as $line) {
            $line = trim($line);

            if (preg_match('/^-\s+##\s+(.+)$/', $line, $matches)) {
                $currentSection = trim($matches[1]);
                $sections[$currentSection] = [];
            } elseif (preg_match('/^-\s+\[(.+?)\]\(\/docs\/(.+?)\)/', $line, $matches)) {
                $title = $matches[1];
                $slug = $matches[2];

                if (in_array($slug, $excluded)) {
                    continue;
                }

                $sections[$currentSection][] = [
                    'slug' => $slug,
                    'title' => $title,
                ];
            }
        }

        return $sections;
    }

    /**
     * @param  array{slug: string, title: string}  $page
     */
    protected function formatIndexEntry(array $page, string $baseUrl): string
    {
        $url = "{$baseUrl}/docs/{$page['slug']}/llms.txt";
        $description = $this->getShortDescription($page['slug']);

        if ($description !== '') {
            return "- [{$page['title']}]({$url}): {$description}";
        }

        return "- [{$page['title']}]({$url})";
    }

    protected function getShortDescription(string $slug): string
    {
        $description = $this->getDescription($slug);

        if ($description === '') {
            return '';
        }

        $firstSentence = Str::before($description, '. ');

        if ($firstSentence !== $description) {
            $firstSentence .= '.';
        }

        if (mb_strlen($firstSentence) > 120) {
            return mb_substr($firstSentence, 0, 117).'...';
        }

        return $firstSentence;
    }

    protected function getDescription(string $slug): string
    {
        $path = "{$this->docsPath}/{$slug}.md";

        if (! $this->filesystem->exists($path)) {
            return '';
        }

        $parsed = YamlFrontMatter::parse($this->filesystem->get($path));

        return trim((string) $parsed->matter('description'));
    }

    protected function getBody(string $slug): ?string
    {
        $path = "{$this->docsPath}/{$slug}.md";

        if (! $this->filesystem->exists($path)) {
            return null;
        }

        $parsed = YamlFrontMatter::parse($this->filesystem->get($path));

        return trim($parsed->body());
    }
}
