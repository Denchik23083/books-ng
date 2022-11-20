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

  books$!: BehaviorSubject<BookModel[]>;
  
  constructor(private service: BooksService, private router: Router) {
    this.books$ = service.books$;
   }

  ngOnInit(): void { this.service.getAll().subscribe(); }

  ngOnChanges(): void{ this.service.getAll().subscribe(); }

  details(id: number): void{ this.router.navigate(['/', id]); }

  routeAdd(): void{ this.router.navigate(['/add']); }

  routeUpdate(id: number): void{ this.router.navigate(['/update', id]); }

  remove(id: number): void{
    this.service.remove(id).subscribe();
  }
}
