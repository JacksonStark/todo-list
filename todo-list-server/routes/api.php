<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// List todos
Route::get('todos', 'TodoController@index');

// Create new todo
Route::post('todo', 'TodoController@create');

// Delete 
Route::delete('todo/{id}', 'TodoController@destroy');