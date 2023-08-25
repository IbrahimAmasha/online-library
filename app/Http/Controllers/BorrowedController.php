<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Borrowed;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BorrowedController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
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

        if(Auth()->user()->user_type =='user') 
        {
            return view('user.borrowed',compact('arr'));
        } 
        else 
        {
            return view('admin.admin_panel.views.borrowed_books',compact('arr'));

        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {

        $request->validate([
            'book' => 'required|exists:books,id|unique:borroweds,book_id,NULL,id,user_id,' . Auth()->user()->id,
        ]);


        $id =  app('request')->input('book') ;
        echo $id;

      $book =   Book::find($id);

        $borrowed_book = new Borrowed();

        $borrowed_book->book_id = $book->id;
        $borrowed_book->user_id = Auth()->user()->id;

        $borrowed_book->save();
        return redirect()->route('borrowed.index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      
    }

    /**
     * Display the specified resource.
     */
    public function show(Borrowed $borrowed)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Borrowed $borrowed)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Borrowed $borrowed)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Borrowed $borrowed)
    {
        //
    }
}







