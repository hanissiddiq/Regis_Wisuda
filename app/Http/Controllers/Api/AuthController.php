<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    //
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            // 'nim' => 'required|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6'
        ]);

        $user = User::create([
            'name' => $request->name,
            // 'nim' => $request->nim,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'role' => 'student'
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'success' => true,
            'user' => $user,
            'message' => 'Register berhasil',
            'token' => $token
        ]);
    }

    // =========================
    // LOGIN
    // =========================
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where(
            'email',
            $request->email
        )->first();

        if (!$user) {
            return response()->json([
                'message' => 'Email tidak ditemukan'
            ], 401);
        }

        if (!Hash::check($request->password, $user->password)) {

            return response()->json([
                'message' => 'Password salah'
            ], 401);
        }

        $token = $user
            ->createToken('auth_token')
            ->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
    }

    // =========================
    // LOGOUT
    // =========================
    public function logout(Request $request)
    {
        $request->user()
            ->currentAccessToken()
            ->delete();

        return response()->json([
            'message' => 'Logout berhasil'
        ]);
    }

    // =========================
    // ME
    // =========================
    public function me(Request $request)
    {
        return response()->json(
            $request->user()
        );
    }
}
