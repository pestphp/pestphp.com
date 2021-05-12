<?php

$finder = PhpCsFixer\Finder::create()
    ->in(__DIR__)
    ->exclude(['bootstrap', 'storage', 'vendor'])
    ->name('*.php')
    ->name('_ide_helper')
    ->notName('*.blade.php')
    ->ignoreDotFiles(true)
    ->ignoreVCS(true);

$rules = [
    '@PSR2' => true,
    'array_syntax' => ['syntax' => 'short'],
    'ordered_imports' => ['sort_algorithm' => 'length'],
    'no_unused_imports' => true,
];

return (new PhpCsFixer\Config())
    ->setUsingCache(true)
    ->setRules($rules)
    ->setFinder($finder);
