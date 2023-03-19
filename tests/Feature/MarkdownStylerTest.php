<?php

use App\Contracts\MarkdownStyler;
use App\Support\MarkdownParser;
use App\Support\MarkdownStylers\TorchlightMarkdownStyler;

it('uses Torchlight when a Torchlight API key is defined', function () {
    config()->set('torchlight.token', 'xxxx');

    expect(resolve(MarkdownStyler::class))->toBeInstanceOf(TorchlightMarkdownStyler::class);
});

it('is called by the MarkdownParser', function () {
    $this->partialMock(MarkdownStyler::class)
        ->shouldReceive('stylise')
        ->once();

    resolve(MarkdownParser::class)->convertToHtml('Hello World');
});
