import { Book } from './../../book.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  
  book: Book;
  constructor(private route: ActivatedRoute, private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.book={
      id:null,
      title:"",
      author:"",
      numberOfPages:null,
      publishedAt:null
    }
    this.book.id=this.route.snapshot.params.id;
    this.getBook(this.book.id);
    
  }

  onSubmit() {
    this.bookService.putBook(this.book).subscribe(data => {
      this.book={
        id:null,
        title:"",
        author:"",
        numberOfPages:null,
        publishedAt:null
      }
     this.router.navigateByUrl('/');
    }, err => {
      console.log(err);
    });
  }

  getBook(id:number) {
    this.bookService.getBook(id).subscribe(book => {
      this.book = book as Book;
    }, err=> {
      console.log(err);
    })
  }

}
