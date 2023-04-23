import { Component, OnInit } from '@angular/core';
import { BookModel, BooksService } from '../../../services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CategoriesService, CategoryModel } from 'src/app/services/categories.service';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.scss']
})
export class UpdateBooksComponent implements OnInit {
  
  book: BookModel = {
    title: '',
    author: '',
    pagesCount: 0,
    publishDate: new Date,
    categoryId: 0
  };

  categories: CategoryModel[] = [];

  constructor(private readonly service: BooksService, private categoriesService: CategoriesService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as any
    this.service.getById(id)
      .subscribe(book => this.book = book);
      
    this.categoriesService.getAll()
      .subscribe(categories => this.categories = categories); 
  } 
  
  submit(form: NgForm): void {
    const updateBook = form.value as BookModel;
    const id = this.activatedRoute.snapshot.paramMap.get('id') as any
    this.service.update(updateBook, id).subscribe(() => {
      form.resetForm();
      window.location.reload();
    })
    this.router.navigate(['/books']);
  }

  route(): void {
    this.router.navigate(['/books']);
  }

}
