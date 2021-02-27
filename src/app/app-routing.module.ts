import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { NewBookComponent } from './components/new-book/new-book.component';

const routes: Routes = [
  {path:'edit-book/:id', component:EditBookComponent},
  {path:'newBook', component:NewBookComponent},
  {path:'**', component:BooksListComponent},
  {path:'', component:BooksListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
