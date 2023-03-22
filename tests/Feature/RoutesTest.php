<?php

it('has welcome page')
    ->get('/')
    ->assertStatus(200);

it('has installation page')
    ->get('/docs/installation')
    ->assertStatus(200);

it('can redirect old page', function (string $route) {
    $this->get($route)
        ->assertStatus(301);
})->with([
    'docs/underlying-test-case',
    'docs/assertions',
    'docs/setup-and-teardown',
    'docs/higher-order-tests',
    'docs/helpers',
    'docs/ide-plugins',
    'docs/exceptions-and-errors',
    'docs/groups',
    'docs/test-dependency',
    'docs/coverage',
    'docs/cli-options',
    'docs/plugins/laravel',
    'docs/plugins/livewire',
    'docs/plugins/parallel',
    'docs/plugins/mock',
    'docs/plugins/money',
    'docs/plugins/mutation-testing',
    'docs/plugins/faker',
    'docs/plugins/global-assertions',
    'docs/plugins/snapshots',
    'docs/plugins/time',
    'docs/plugins/watch',
    'docs/plugins/creating-plugins',
    'docs/community',
    'docs/contribute',
]);
