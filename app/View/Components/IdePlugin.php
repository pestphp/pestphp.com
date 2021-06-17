<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class IdePlugin extends Component
{
    public string $title;

    public string $logo;

    public string $github;

    public string $url;

    public ?int $installs;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(string $title, string $logo, string $github, string $url)
    {
        $this->title = $title;
        $this->logo = $logo;
        $this->github = $github;
        $this->url = $url;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return View|Closure|string
     */
    public function render()
    {
        return view('components.ide-plugin');
    }
}
