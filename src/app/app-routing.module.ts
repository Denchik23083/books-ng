import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { GetIdBooksComponent } from './components/getid-books/getid-books.component';
import { UpdateBooksComponent } from './components/update-books/update-books.component';

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
