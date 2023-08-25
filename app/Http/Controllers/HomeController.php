<?php

namespace App\Http\Controllers;

use App\Models\Book;

use App\Models\User;

use App\Models\Borrowed;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function index() {

        $arr = [];
      $books = Borrowed::all();

        foreach ($books as $book) {
           $id =  $book->book_id;
           $newbook = Book::find($id);

           $s = strval($book->return_date);
           $newbook2 = [$newbook];
           array_push($newbook2,$s);

            array_push($arr,$newbook2);
            $newbook2 = [];
        }






        $books = Book::all();


        if (Auth::id()) 
        {

            $user_type = Auth()->user()->user_type;

            if($user_type == 'user') 
            {
                return view('index',compact('books','arr'));
            }
            else if($user_type == 'admin') 
            {
                // return view('admin.admin_home');
                // return view('admin.image');
                return view('admin.admin_panel.views.index',compact('books'));

            }
            else 
            {
                return redirect()->back();
            }

        }
    }

    public function posts() {
        return "hellllllo";
    }
}
