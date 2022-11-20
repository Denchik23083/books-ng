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
  book$ = new BehaviorSubject<BookModel | null>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<BookModel[]>{
    return this.http.get<BookModel[]>(this.apiLink)
      .pipe(tap(books => this.books$.next(books)));
  }

  getById(id: number): Observable<BookModel>{    
    return this.http.get<BookModel>(`${this.apiLink}/id?id=${id}`)
      .pipe(tap(book => this.book$.next(book)));
  }

  add(model: BookModel): Observable<BookModel>{
    return this.http.post<BookModel>(this.apiLink, model)
      .pipe(tap(created => this.books$.next([...this.books$.value, created])));
  }

  update(model: BookModel, id: number): Observable<{}>{
    const update = this.books$.value.filter(b => b.id !== id);

    return this.http.put<{}>(`${this.apiLink}/id?id=${id}`, model)
      .pipe(tap(() => this.books$.next(update)));
  }

  remove(id: number): Observable<{}>{
    const remove = this.books$.value.filter(b => b.id !== id);

    return this.http.delete<{}>(`${this.apiLink}/id?id=${id}`)
      .pipe(tap(() => this.books$.next(remove)));
  }
}
