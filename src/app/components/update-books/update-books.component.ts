import { Component, OnInit } from '@angular/core';
import { BookModel, BooksService } from '../services/books-service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.scss']
})
export class UpdateBooksComponent implements OnInit {
  
  book$ = new BehaviorSubject<BookModel | null>(null);

  book: BookModel = {
    title: '',
    author: '',
    pagesCount: 0,
    publishDate: new Date
  };

  constructor(private readonly service: BooksService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.book$ = service.book$;
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as any
    this.service.getById(id).subscribe();
  } 
  
  submit(form: NgForm): void {
    const updateBook = form.value as BookModel;
    const id = this.activatedRoute.snapshot.paramMap.get('id') as any
    this.service.update(updateBook, id).subscribe(() => {
      form.resetForm();
    })
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

  route(): void {
    this.router.navigate(['/']);
  }

}
