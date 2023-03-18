<?php

it('has welcome page')
    ->get('/')
    ->assertStatus(200);

it('has installation page')
    ->get('/docs/installation')
    ->assertStatus(200);
