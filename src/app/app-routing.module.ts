import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './components/books/add-books/add-books.component';
import { AllBooksComponent } from './components/books/all-books/all-books.component';
import { GetIdBooksComponent } from './components/books/get-id-books/get-id-books.component';
import { UpdateBooksComponent } from './components/books/update-books/update-books.component';
import { MainComponent } from './components/main/main.component';
import { AllCategoriesComponent } from './components/categories/all-categories/all-categories.component';
import { AddCategoriesComponent } from './components/categories/add-categories/add-categories.component';
import { UpdateCategoriesComponent } from './components/categories/update-categories/update-categories.component';
import { GetIdCategoriesComponent } from './components/categories/get-id-categories/get-id-categories.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'books', component: AllBooksComponent},
  { path: 'books/add', component: AddBooksComponent },
  { path: 'books/:id/edit', component: UpdateBooksComponent },
  { path: 'books/:id', component: GetIdBooksComponent },
  { path: 'categories', component: AllCategoriesComponent},
  { path: 'categories/add', component: AddCategoriesComponent },
  { path: 'categories/:id/edit', component: UpdateCategoriesComponent },
  { path: 'categories/:id', component: GetIdCategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
