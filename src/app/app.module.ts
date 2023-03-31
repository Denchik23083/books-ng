import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BooksService } from './services/books.service';
import { AddBooksComponent } from './components/books/add-books/add-books.component';
import { FormsModule } from '@angular/forms';
import { UpdateBooksComponent } from './components/books/update-books/update-books.component';
import { GetIdBooksComponent } from './components/books/get-id-books/get-id-books.component';
import { AllBooksComponent } from './components/books/all-books/all-books.component';
import { MainComponent } from './components/main/main.component';
import { AllCategoriesComponent } from './components/categories/all-categories/all-categories.component';
import { AddCategoriesComponent } from './components/categories/add-categories/add-categories.component';
import { UpdateCategoriesComponent } from './components/categories/update-categories/update-categories.component';
import { GetIdCategoriesComponent } from './components/categories/get-id-categories/get-id-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBooksComponent,
    UpdateBooksComponent,
    GetIdBooksComponent,
    AllBooksComponent,
    MainComponent,
    AllCategoriesComponent,
    AddCategoriesComponent,
    UpdateCategoriesComponent,
    GetIdCategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
