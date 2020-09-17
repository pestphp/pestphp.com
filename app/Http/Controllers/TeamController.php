<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\Yaml\Yaml;

class TeamController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        return view('team',[
            "teams" => Yaml::parseFile(base_path('data/team.yaml'))
        ]);
    }
}
