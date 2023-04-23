import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService, CategoryModel } from 'src/app/services/categories.service';

@Component({
  selector: 'app-update-categories',
  templateUrl: './update-categories.component.html',
  styleUrls: ['./update-categories.component.scss']
})
export class UpdateCategoriesComponent implements OnInit {

  category: CategoryModel = {
    description: '',
    books: []
  };

  constructor(private service: CategoriesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void { 
    const id = this.activatedRoute.snapshot.paramMap.get('id') as any
    this.service.getById(id)
      .subscribe(category => this.category = category);
  }

  route(): void {
    this.router.navigate(['/categories']);
  }

  submit(form: NgForm): void {
    const updateCategory = form.value as CategoryModel;
    const id = this.activatedRoute.snapshot.paramMap.get('id') as any
    this.service.update(updateCategory, id).subscribe(() => {
      form.resetForm();
      window.location.reload();
    })
    this.router.navigate(['/categories']);
  }

}
