import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface BookModel{
  id?: number,
  title: string,
  author: string,
  pagesCount: number,
  publishDate: Date,
  categoryId: number
}

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  apiLink = 'https://localhost:5001/api/Books';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<BookModel[]>(this.apiLink);
  }

  getById(id: number){    
    return this.http.get<BookModel>(`${this.apiLink}/id?id=${id}`);
  }

  add(model: BookModel){
    return this.http.post<BookModel>(this.apiLink, model);
  }

  update(model: BookModel, id: number){
    return this.http.put<{}>(`${this.apiLink}/id?id=${id}`, model);
  }

  remove(id: number){
    return this.http.delete<{}>(`${this.apiLink}/id?id=${id}`);
  }
}
