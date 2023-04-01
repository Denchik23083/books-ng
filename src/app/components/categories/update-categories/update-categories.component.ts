import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
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

  category$ = new BehaviorSubject<CategoryModel | null>(null);

  constructor(private service: CategoriesService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.category$ = service.category$;
   }

  ngOnInit(): void { 
    const id = this.activatedRoute.snapshot.paramMap.get('id') as any
    this.service.getById(id).subscribe();
  }

  route(): void {
    this.router.navigate(['/categories']);
  }

  submit(form: NgForm): void {
    debugger;
    const updateCategory = form.value as CategoryModel;
    this.service.add(updateCategory).subscribe(() => {
      form.resetForm();
    })
    this.router.navigate(['/categories']).then(() => {
      window.location.reload();
    });
  }

}
