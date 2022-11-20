import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BookModel, BooksService } from '../services/books-service';

@Component({
  selector: 'app-getid-books',
  templateUrl: './getid-books.component.html',
  styleUrls: ['./getid-books.component.scss']
})
export class GetIdBooksComponent implements OnInit {
  book$ = new BehaviorSubject<BookModel | null>(null);

  constructor(private service: BooksService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.book$ = service.book$;
   }

  ngOnInit(): void { 
    const id = this.activatedRoute.snapshot.paramMap.get('id') as any
    this.service.getById(id).subscribe();
  }

  route(): void {
    this.router.navigate(["/"]);
  }
}
