<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $v = $this->validate($request, [
            'name' => 'required|min:3',
            'email' => 'required|email|unique:users',
            'password'  => 'required|min:3|confirmed',
        ]);

        if ($v->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $v->errors()
            ], 422);
        }
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();
        return response()->json(['status' => 'success'], 200);
    }
}
