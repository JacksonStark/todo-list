<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;


$factory->define(App\Todo::class, function (Faker $faker) {
    
    $words = ['swimming','hiking','skiing',
    'running','drinking','skating', 'playing', 
    'biking', 'kayaking', 'shopping', 'running'];

    return [
        'todo' => array_random($words),
        'image_url' => $faker->imageUrl($width = 540, $height = 540)
    ];
});
