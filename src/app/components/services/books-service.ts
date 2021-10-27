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
  apiLink = 'https://localhost:5001/api/Books';
  books$ = new BehaviorSubject<BookModel[]>([]);

  constructor(private http: HttpClient) { }

  getAll(): Observable<BookModel[]>{
    return this.http.get<BookModel[]>(this.apiLink)
      .pipe(
        tap(books => this.books$.next(books))
      );
  }

  getById(id: number): Observable<BookModel[]>{
    const getById = this.books$.value.filter(b => b.id == id)
    
    return this.http.get<BookModel[]>(`${this.apiLink}/${id}`)
      .pipe(
        tap(() => this.books$.next(getById))
      );
  }

  add(model: BookModel): Observable<BookModel>{
    return this.http.post<BookModel>(this.apiLink, model)
      .pipe(
        tap(created => this.books$.next([...this.books$.value, created]))
      )
  }

  remove(id: number): Observable<{}>{
    const remove = this.books$.value.filter(b => b.id !== id);
    return this.http.delete<{}>(`${this.apiLink}/id?id=${id}`)
      .pipe(
        tap(() => this.books$.next(remove))
      );
  }
}
