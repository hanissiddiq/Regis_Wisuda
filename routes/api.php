<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\RegistrationController;
use App\Http\Controllers\Api\PaymentController;
use App\Http\Controllers\Api\MasterController;
use App\Http\Controllers\Api\AuthController;

Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {

    Route::post('/register', [RegistrationController::class, 'store']);
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/me', [AuthController::class, 'me']);
    Route::get('/my-registration',[RegistrationController::class, 'myRegistration']);
    Route::get('/registration/{id}/pdf', [RegistrationController::class, 'downloadPdf']);



    Route::post('/payment', [PaymentController::class, 'createTransaction']);

// Route::post('/payment/callback', [PaymentController::class, 'callback']);

});

Route::get('/registration/{id}/pdf', [RegistrationController::class, 'downloadPdf']);

Route::get('/payment/{orderId}', [PaymentController::class, 'show']);
Route::get('/payment/{id}/pdf', [PaymentController::class, 'downloadPdf']);


// Route::post('/register', [RegistrationController::class, 'store']);

// Route::post('/payment', [PaymentController::class, 'createTransaction']);

Route::post('/payment/callback', [PaymentController::class, 'callback']);

Route::get('/faculties', [MasterController::class, 'faculties']);

Route::get('/jurusans', [MasterController::class, 'jurusans']);

Route::get('/test', function () {
    return 'API OK';
});