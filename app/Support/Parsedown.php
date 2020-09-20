<?php

namespace App\Support;

use ParsedownExtra;
use Illuminate\Support\Str;

class Parsedown extends ParsedownExtra
{
    /**
     * Override original `text` method so we can add anchors to headers.
     *
     * @param  string  $text
     * @return string
     */
    public function text($text)
    {
        $text = parent::text($text);

        $lines = explode("\n", $text);
        $lastName = null;

        foreach ($lines as $number => $line) {
            preg_match('/<a name="(.+)">/', $line, $matches);

            if (isset($matches[1])) {
                $name = $matches[1];

                if (isset($lines[$number + 1]) && Str::startsWith($lines[$number + 1], '<h')) {
                    $header = substr_replace($lines[$number + 1], sprintf('<a href="#%s">', $name), 4, 0);
                    $header = substr_replace($header, sprintf('</a>', $name), -5, 0);
                    $header = substr_replace($header, sprintf(' id="%s"', $name), 3, 0);
                    $lines[$number + 1] = $header;
                }
            }
        }

        return implode("\n", $lines);
    }
}
