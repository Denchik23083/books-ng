import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BooksService } from './services/books.service';
import { AddBooksComponent } from './components/books/add-books/add-books.component';
import { FormsModule } from '@angular/forms';
import { UpdateBooksComponent } from './components/books/update-books/update-books.component';
import { GetIdBooksComponent } from './components/books/getid-books/getid-books.component';
import { AllBooksComponent } from './components/books/all-books/all-books.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBooksComponent,
    UpdateBooksComponent,
    GetIdBooksComponent,
    AllBooksComponent,
    MainComponent
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
