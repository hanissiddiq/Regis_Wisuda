<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\RegistrationController;
use App\Http\Controllers\Api\PaymentController;
use App\Http\Controllers\Api\MasterController;

Route::post('/register', [RegistrationController::class, 'store']);

Route::post('/payment', [PaymentController::class, 'createTransaction']);

Route::post('/payment/callback', [PaymentController::class, 'callback']);

Route::get('/faculties', [MasterController::class, 'faculties']);

Route::get('/jurusans', [MasterController::class, 'jurusans']);

Route::get('/test', function () {
    return 'API OK';
});