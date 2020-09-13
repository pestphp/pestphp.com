<?php

namespace App\View\Components;

use Illuminate\View\Component;
use Illuminate\View\View;

class AppLayout extends Component
{

    public string $layout;

    /**
     * Create a new component instance.
     *
     * @param string $layout
     */
    public function __construct(string $layout)
    {
        $this->layout = $layout;
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
