import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BookModel, BooksService } from '../services/books-service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
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

  getId(id: number): void{

  }
  // const booid = this.component.books$.value as unknown as BookModel;
    // const id = booid.id;

  remove(id: number): void{
    this.service.remove(id).subscribe();
  }

}
