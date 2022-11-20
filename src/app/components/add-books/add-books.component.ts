import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookModel, BooksService } from '../services/books-service';
import { Router } from '@angular/router';

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
    publishDate: new Date
  };

  constructor(private readonly service: BooksService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(form: NgForm): void {
    const newBook = form.value as BookModel;
    this.service.add(newBook).subscribe(() => {
      form.resetForm();
    })
    this.router.navigate(["/"]);
  }

  route(): void {
    this.router.navigate(["/"]);
  }

}
