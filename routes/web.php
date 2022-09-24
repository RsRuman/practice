<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/users', function (){
    $users = \App\Models\User::all();
    return response()->json([
        'status' => 200,
        'data' => $users
    ]);
})->name('users.data');

Route::get('/{any}', function () {
    return view('app');
})->where('any','.*');
