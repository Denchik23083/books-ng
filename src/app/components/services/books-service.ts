import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface BookModel{
  id?: number,
  title: string,
  author: string,
  pagesCount: number,
  publishDate: Date
}

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  apiLink = 'https://localhost:5001/api/books';
  books$ = new BehaviorSubject<BookModel[]>([]);

  constructor(private http: HttpClient) { }

  getAll(): Observable<BookModel[]>{
    return this.http.get<BookModel[]>(this.apiLink)
      .pipe(
        tap(books => this.books$.next(books))
      );
  }

  add(model: BookModel): Observable<BookModel>{
    return this.http.post<BookModel>(this.apiLink, model)
      .pipe(
        tap(created => this.books$.next([...this.books$.value, created]))
      )
  }
}
