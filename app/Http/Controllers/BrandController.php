<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class BrandController extends Controller
{
    /**
     * The brand assets available for download and copy, grouped by kind.
     *
     * @var array<int, array{
     *     id: string,
     *     label: string,
     *     kind: string,
     *     description: string,
     *     variants: array<int, array{id: string, label: string, file: string, surface: string}>
     * }>
     */
    protected const ASSETS = [
        [
            'id' => 'wordmark',
            'label' => 'Wordmark',
            'kind' => 'the logo',
            'description' => 'The PEST wordmark — the primary logo, exactly as it appears on the site. Use it in headers, docs, footers, and anywhere the brand is named.',
            'variants' => [
                ['id' => 'wordmark-white', 'label' => 'white', 'file' => 'wordmark-white.svg', 'surface' => 'dark'],
                ['id' => 'wordmark-black', 'label' => 'black', 'file' => 'wordmark-black.svg', 'surface' => 'light'],
            ],
        ],
        [
            'id' => 'logomark',
            'label' => 'Logomark',
            'kind' => 'the mark',
            'description' => 'The Pest glyph on its own. Reach for it as an app icon, avatar, or favicon — anywhere the wordmark would be too wide.',
            'variants' => [
                ['id' => 'logomark-white', 'label' => 'white', 'file' => 'logomark-white.svg', 'surface' => 'dark'],
                ['id' => 'logomark-black', 'label' => 'black', 'file' => 'logomark-black.svg', 'surface' => 'light'],
            ],
        ],
    ];

    /**
     * The Pest brand color palette.
     *
     * @var array<int, array{name: string, value: string, note: string}>
     */
    protected const PALETTE = [
        ['name' => 'Rose', 'value' => '#f43f5e', 'note' => 'accent — rose-500'],
        ['name' => 'Green', 'value' => '#64e6ae', 'note' => 'gradient start'],
        ['name' => 'Cyan', 'value' => '#4ed4ff', 'note' => 'gradient mid'],
        ['name' => 'Pink', 'value' => '#f471b5', 'note' => 'gradient end'],
        ['name' => 'Zinc 900', 'value' => '#18181b', 'note' => 'canvas'],
        ['name' => 'Zinc 200', 'value' => '#e4e4e7', 'note' => 'text'],
    ];

    /**
     * Handle the incoming request.
     */
    public function __invoke(): View
    {
        $assets = self::ASSETS;

        // Read every variant's raw SVG so the page can copy it to the
        // clipboard without a round-trip, keyed by the variant id.
        $svgs = [];

        foreach ($assets as $group) {
            foreach ($group['variants'] as $variant) {
                $svgs[$variant['id']] = trim((string) file_get_contents(
                    public_path('logo/'.$variant['file'])
                ));
            }
        }

        return view('brand', [
            'title' => 'Brand Assets',
            'description' => 'Pest logos, wordmarks, and brand guidelines — copy any asset as SVG or download the full kit.',
            'assets' => $assets,
            'palette' => self::PALETTE,
            'svgs' => $svgs,
        ]);
    }
}
