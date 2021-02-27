import { Book } from './../book.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  host= environment.url;
  
  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get(this.host);
  }

  postBook(book: Book) {
    return this.http.post(this.host, book);
  }

  getBook(id:number){
    return this.http.get(this.host+'/'+id);
  }

  putBook(book: Book) {
    return this.http.put(this.host+'/'+book.id, book);
  }

  deleteBook(book: Book) {
    return this.http.delete(this.host+'/'+book.id);
  }
}
