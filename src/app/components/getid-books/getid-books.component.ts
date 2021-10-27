import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BookModel, BooksService } from '../services/books-service';

@Component({
  selector: 'app-getid-books',
  templateUrl: './getid-books.component.html',
  styleUrls: ['./getid-books.component.scss']
})
export class GetidBooksComponent implements OnInit {
  books$!: BehaviorSubject<BookModel[]>;
  isLoading = true;

  constructor(private service: BooksService) {
    this.books$ = service.books$;
   }

  ngOnInit(): void {   
  }

  getId(id: number): void {
    this.service.getById(id).subscribe();

    this.isLoading = false;
  }

}
