<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\BorrowedController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/home',[HomeController::class,'index'])
->middleware('auth')->name('home');


Route::get('posts',[HomeController::class,'posts'])->
middleware(['auth','admin']);


Route::get('/upload', [BookController::class,'show']);
Route::post('/upload', [BookController::class,'store'])->name('upload');


Route::resource('user',UserController::class);

Route::resource('book',BookController::class);
Route::resource('borrowed',BorrowedController::class);
// Route::get('book',[BookController::class,'show'])->name('book');
// Route::get('book/{id}', [BookController::class, 'show'])->name('book.show');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
