import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BooksComponent } from './components/books/books.component';
import { BooksService } from './components/services/books-service';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { FormsModule } from '@angular/forms';
import { UpdateBooksComponent } from './components/update-books/update-books.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AddBooksComponent,
    UpdateBooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
