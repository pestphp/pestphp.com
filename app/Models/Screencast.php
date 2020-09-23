<?php

namespace App\Models;

use Sushi\Sushi;
use Illuminate\Database\Eloquent\Model;

class Screencast extends Model
{
    use Sushi;

    public function series()
    {
        return $this->belongsTo(Series::class);
    }

    public function getNextAttribute()
    {
        return static::find($this->id + 1);
    }

    public function getPrevAttribute()
    {
        return static::find($this->id - 1);
    }

    protected $rows = [
        [
            'title' => 'Introducing Pest',
            'slug' => 'introduction',
            'description' => <<<EOT
                Pest is a Testing Framework with a focus on simplicity. It was carefully crafted to bring the joy of testing to PHP.
            EOT,
            'url' => 'https://player.vimeo.com/video/399624132?autoplay=1',
            'code_url' => null,
            'series_id' => 1,
            'is_paid' => false,
        ],
    ];
}
