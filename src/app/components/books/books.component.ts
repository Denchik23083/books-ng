import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BookModel, BooksService } from '../services/books-service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  @Input()
  books$!: BehaviorSubject<BookModel[]>;
  
  isLoading = true;

  constructor(private service: BooksService) {
    this.books$ = service.books$;
   }

  ngOnInit(): void {
  }

  loadData(): void {
    this.service.getAll().subscribe();

    this.isLoading = false;
  }

  remove(): void{
    console.log("Hallo");    
  }

}
