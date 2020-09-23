<?php

namespace App\Models;

use Sushi\Sushi;
use Illuminate\Database\Eloquent\Model;

class Series extends Model
{
    use Sushi;

    public function screencasts()
    {
        return $this->hasMany(Screencast::class);
    }

    public function getRows()
    {
        return [
            [ 'id' => 1, 'title' => 'Getting Started' ],
        ];
    }
}
