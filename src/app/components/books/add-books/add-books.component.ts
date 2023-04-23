import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookModel, BooksService } from '../../../services/books.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
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

  category = new BehaviorSubject<CategoryModel | null>(null);

  categories$!: BehaviorSubject<CategoryModel[]>;

  constructor(private readonly service: BooksService, private categoriesService: CategoriesService, private router: Router) { 
    this.categories$ = categoriesService.categories$;
  }

  ngOnInit(): void {
    this.categoriesService.getAll().subscribe(); 
  }

  submit(form: NgForm): void {
    const newBook = form.value as BookModel;
    this.service.add(newBook).subscribe(() => {
      form.resetForm();
    })
    this.router.navigate(['/books']).then(() => {
      window.location.reload();
    });
  }

  route(): void {
    this.router.navigate(['/books']);
  }

}
