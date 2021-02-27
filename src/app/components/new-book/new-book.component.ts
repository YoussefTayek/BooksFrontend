import { Book } from './../../book.model';
import { BookService } from './../../service/book.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  book: Book;

  constructor(private bookService: BookService, private router: Router) {
    
   }

  ngOnInit(): void {
    this.book={
      id:0,
      title:"",
      author:"",
      numberOfPages:0,
      publishedAt: null
    };
  }

  onSubmit() {
   
    this.bookService.postBook(this.book).subscribe(data => {
      this.router.navigateByUrl('');
    },err=>{
      console.log(err);
    });
  }

}
