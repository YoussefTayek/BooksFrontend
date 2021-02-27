import { Book } from './../../book.model';
import { BookService } from './../../service/book.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books:Book[];
  constructor(private bookService: BookService, private router: Router) {
   
   }

  ngOnInit(): void {
    this.GetAllBooks();
  }

  GetAllBooks() {
    this.bookService.getBooks().subscribe(data => {
      this.books =data as Book[];
    });
  }

  editBook(id: number) {
    this.router.navigateByUrl('edit-book/'+id);
  }

  deleteBook(book: Book) {
    if (confirm('Are you sure to delete this book?')){
      this.bookService.deleteBook(book).subscribe(data => {
        this.GetAllBooks();
      }, err => {
        console.log(err);
      })
    }
  }
}
