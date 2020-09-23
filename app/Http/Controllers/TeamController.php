<?php

namespace App\Http\Controllers;

use App\Support\Teams;
use Illuminate\View\View;
use App\Support\Documentation;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\Foundation\Application;

class TeamController extends Controller
{
    protected const DEFAULT_VERSION = "master";
    /**
     * Handle the incoming request.
     *
     * @param Documentation $docs
     * @return Application|Factory|View
     */
    public function __invoke(Documentation $docs)
    {
        return view('team', [
            "teams" => Teams::teams(),
            "index" => $docs->getIndex(config('site.defaultVersion'))
        ]);
    }
}
