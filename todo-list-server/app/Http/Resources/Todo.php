<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Contracts\Routing\ResponseFactory;

class Todo extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */

    public function toArray($request)
    {
        // return parent::toArray($request);

        return response()->json([
            'id' => $this->id,
            'todo' => $this->todo,
            'image_url' => $this->image_url
        ]);

        // return [
        //     'id' => $this->id,
        //     'todo' => $this->todo,
        //     'image_url' => $this->image_url
        // ];
    }
}
