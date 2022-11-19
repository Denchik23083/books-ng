import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { BooksComponent } from './components/books/books.component';
import { GetIdBooksComponent as GetIdBooksComponent } from './components/getid-books/getid-books.component';
import { UpdateBooksComponent } from './components/update-books/update-books.component';

const routes: Routes = [
  { path: '', component: BooksComponent},
  { path: 'add', component: AddBooksComponent },
  { path: 'update', component: UpdateBooksComponent },
  { path: ':id', component: GetIdBooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
