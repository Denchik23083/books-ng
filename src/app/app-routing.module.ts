import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './components/books/add-books/add-books.component';
import { AllBooksComponent } from './components/books/all-books/all-books.component';
import { GetIdBooksComponent } from './components/books/getid-books/getid-books.component';
import { UpdateBooksComponent } from './components/books/update-books/update-books.component';

const routes: Routes = [
  { path: '', component: AllBooksComponent},
  { path: 'add', component: AddBooksComponent },
  { path: 'update/:id', component: UpdateBooksComponent },
  { path: ':id', component: GetIdBooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
