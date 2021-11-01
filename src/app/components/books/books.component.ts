import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { BookModel, BooksService } from '../services/books-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  
  book: BookModel = {
    title: '',
    author: '',
    pagesCount: 0,
    publishDate: null as any
  };

  books$!: BehaviorSubject<BookModel[]>;
  
  isLoading = true;
  isDisplay = true;

  constructor(private service: BooksService, private router: Router) {
    this.books$ = service.books$;
   }

  ngOnInit(): void {
  }

  Display(){
    this.isDisplay = !this.isDisplay;
  }

  loadData(): void {
    this.service.getAll().subscribe();

    this.isLoading = false;
  }

  remove(id: number): void{
    this.service.remove(id).subscribe();
  }

  submit(form: NgForm): void {
    const updateBook = form.value as BookModel;
    this.service.update(updateBook).subscribe(() => {
      form.resetForm();
    })
    this.router.navigate(['/']);
  }
}
