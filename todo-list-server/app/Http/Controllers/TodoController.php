<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use App\Http\Requests;
use App\Todo;
use App\Http\Resources\Todo as TodoResource;

class TodoController extends Controller
{
    public function index()
    {
        // Get all todoos
        $todos = Todo::all();

        // Return collection of todos as a resource
        return TodoResource::collection($todos);

    }

    public function create(Request $request)
    {
        $todo_draft = new Todo;
    
        // setting todo column of our new Todo (todo_draft)
        $todo_draft->todo = $request->todo;
        // setting image_url column of our new Todo (todo_draft)
        $todo_draft->image_url = $request->image_url;

        if ($todo_draft->save()) {
            return new TodoResource($todo_draft);
            // return $todo_draft;
        }

    }

    // public function store(Request $request)
    // {
    // }

    // public function show($id)
    // {
    //     //
    // }

    public function destroy($id)
    {
        $todo = Todo::findOrFail($id);

        if ($todo->delete()) {
            return new TodoResource($todo);
        }
    }
}
