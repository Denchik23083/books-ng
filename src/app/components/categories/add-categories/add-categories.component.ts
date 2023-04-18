import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookModel } from 'src/app/services/books.service';
import { CategoriesService, CategoryModel } from 'src/app/services/categories.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.scss']
})
export class AddCategoriesComponent implements OnInit {

  category: CategoryModel = {
    description: '',
    books: []
  };

  constructor(private readonly service: CategoriesService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(form: NgForm): void {
    const newCategory = form.value as CategoryModel;
    this.service.add(newCategory).subscribe(() => {
      form.resetForm();
    })
    this.router.navigate(['/categories']).then(() => {
      window.location.reload();
    });
  }

  route(): void {
    this.router.navigate(['/categories']);
  }

}
