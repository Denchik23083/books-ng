import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookModel, BooksService } from '../../../services/books.service';
import { Router } from '@angular/router';
import { CategoriesService, CategoryModel } from 'src/app/services/categories.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})

export class AddBooksComponent implements OnInit {

  book: BookModel = {
    title: '',
    author: '',
    pagesCount: 0,
    publishDate: new Date,
    categoryId: 0
  };

  categories: CategoryModel[] = [];

  constructor(private readonly service: BooksService, private categoriesService: CategoriesService, private router: Router) {}

  ngOnInit(): void {
    this.categoriesService.getAll()
      .subscribe(categories => this.categories = categories); 
  }

  submit(form: NgForm): void {
    const newBook = form.value as BookModel;
    this.service.add(newBook).subscribe(() => {
      form.resetForm();
      window.location.reload();
    })
    this.router.navigate(['/books']);
  }

  route(): void {
    this.router.navigate(['/books']);
  }

}
