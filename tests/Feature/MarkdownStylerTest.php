<?php

use App\Contracts\MarkdownStyler;
use App\Support\MarkdownParser;
use App\Support\MarkdownStylers\SpatieMarkdownStyler;
use App\Support\MarkdownStylers\TorchlightMarkdownStyler;

it('uses Torchlight when a Torchlight API key is defined', function () {
    config()->set('torchlight.token', 'xxxx');

    expect(resolve(MarkdownStyler::class))->toBeInstanceOf(TorchlightMarkdownStyler::class);
});

it('uses Spatie when a Torchlight API key is not defined', function () {
    config()->set('torchlight.token', null);

    expect(resolve(MarkdownStyler::class))->toBeInstanceOf(SpatieMarkdownStyler::class);
});

it('is called by the MarkdownParser', function () {
    $this->partialMock(MarkdownStyler::class)
        ->shouldReceive('stylise')
        ->once();

    resolve(MarkdownParser::class)->convertToHtml('Hello World');
});
