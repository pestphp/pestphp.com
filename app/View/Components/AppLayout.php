<?php

namespace App\View\Components;

use Illuminate\View\Component;
use Illuminate\View\View;

class AppLayout extends Component
{
    public string $layout;

    public ?string $title;

    public ?string $description;

    /**
     * Create a new component instance.
     */
    public function __construct(
        string $layout,
        string $title = null,
        string $description = null
    ) {
        $this->layout = $layout;
        $this->title = $title;
        $this->description = $description;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return View|string
     */
    public function render()
    {
        return view("layouts.{$this->layout}");
    }
}
