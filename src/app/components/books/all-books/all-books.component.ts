import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BookModel, BooksService } from '../../../services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {

  books$!: BehaviorSubject<BookModel[]>;
  
  constructor(private service: BooksService, private router: Router) {
    this.books$ = service.books$;    
  }

  ngOnChanges(): void{
    this.service.getAll().subscribe(); 
  }

  ngOnInit(): void{ 
    this.service.getAll().subscribe(); 
  }

  routeMain(): void {
    this.router.navigate(['/']); 
  }

  details(id: number): void{ 
    this.router.navigate(['/books', id]); 
  }

  routeAdd(): void{ 
    this.router.navigate(['/books/add']); 
  }

  routeUpdate(id: number): void{ 
    this.router.navigate([`/books/${id}/edit`]); 
  }

  remove(id: number): void{
    this.service.remove(id).subscribe();
  }

}
