import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookModel, BooksService } from '../services/books-service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})

export class AddBooksComponent implements OnInit {

  book: BookModel = {
    title: '',
    author: '',
    pagesCount: 0,
    publishDate: null as any
  };

  constructor(private readonly service: BooksService) { }

  ngOnInit(): void {
  }

  submit(form: NgForm): void {
    const newBook = form.value as BookModel;
    this.service.add(newBook).subscribe(() => {
      form.resetForm();
    })
  }

}
