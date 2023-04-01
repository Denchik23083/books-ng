import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BookModel } from './books.service';

export interface CategoryModel{
  id?: number,
  description: string,
  books: Array<BookModel>
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  apiLink = 'https://localhost:5001/api/Categories';
  categories$ = new BehaviorSubject<CategoryModel[]>([]);
  category$ = new BehaviorSubject<CategoryModel | null>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<CategoryModel[]>{
    return this.http.get<CategoryModel[]>(this.apiLink)
      .pipe(tap(categories => this.categories$.next(categories)));
  }

  getById(id: number): Observable<CategoryModel>{    
    return this.http.get<CategoryModel>(`${this.apiLink}/id?id=${id}`)
      .pipe(tap(category => this.category$.next(category)));
  }

  add(model: CategoryModel): Observable<CategoryModel>{
    debugger;
    return this.http.post<CategoryModel>(this.apiLink, model)
      .pipe(tap(created => this.categories$.next([...this.categories$.value, created])));
  }

  update(model: CategoryModel, id: number): Observable<{}>{
    const update = this.categories$.value.filter(b => b.id !== id);

    return this.http.put<{}>(`${this.apiLink}/id?id=${id}`, model)
      .pipe(tap(() => this.categories$.next(update)));
  }

  remove(id: number): Observable<{}>{
    const remove = this.categories$.value.filter(b => b.id !== id);

    return this.http.delete<{}>(`${this.apiLink}/id?id=${id}`)
      .pipe(tap(() => this.categories$.next(remove)));
  }
}
