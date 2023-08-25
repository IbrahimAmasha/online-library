<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Book::all();
        return view('admin.admin_panel.views.all_books',compact('books'));

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $books = Book::all();
        return view('admin.admin_panel.views.add',compact('books'));

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // save photo in folder
      $file_extension = $request->photo->getClientOriginalExtension();
      $file_name = time(). '.' . $file_extension;
      $path = 'assets/images/books';
      $request->photo->move($path,$file_name);


        $book = new Book();
        $book->title = $request->title;
        $book->price = $request->price;
        $book->image_path = $file_name;
        $book->save();

        return redirect()->route('home');

    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        return view('user.book',compact('book'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        return view('admin.admin_panel.views.edit',compact('book'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Book $book)
    {
        $file_extension = $request->photo->getClientOriginalExtension();
        $file_name = time(). '.' . $file_extension;
        $path = 'assets/images/books';
        $request->photo->move($path,$file_name);
  


        $book->title = $request->title;
        $book->price = $request->price;
    
        $book->image_path = $file_name;

    
        $book->save();
    
        return redirect()->route('home');

    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        $book->delete();
        return redirect()->back();
    }
}
