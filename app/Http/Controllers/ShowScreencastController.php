<?php

namespace App\Http\Controllers;

use App\Models\Screencast;
use Illuminate\Http\Request;

class ShowScreencastController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(string $slug)
    {
        $screencast = Screencast::whereSlug($slug)->firstOrFail();

        return view('screencasts', [
            'title' => $screencast->title . ' | screencasts',
            'screencast' => $screencast,
        ]);
    }
}
