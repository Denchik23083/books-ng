import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<CategoryModel[]>(this.apiLink);
  }

  getById(id: number){    
    return this.http.get<CategoryModel>(`${this.apiLink}/id?id=${id}`);
  }

  add(model: CategoryModel){
    return this.http.post<CategoryModel>(this.apiLink, model);
  }

  update(model: CategoryModel, id: number){
    return this.http.put<{}>(`${this.apiLink}/id?id=${id}`, model);
  }

  remove(id: number){
    return this.http.delete<{}>(`${this.apiLink}/id?id=${id}`);
  }
}
