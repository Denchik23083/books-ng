import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CategoriesService, CategoryModel } from 'src/app/services/categories.service';

@Component({
  selector: 'app-get-id-categories',
  templateUrl: './get-id-categories.component.html',
  styleUrls: ['./get-id-categories.component.scss']
})
export class GetIdCategoriesComponent implements OnInit {

  category!: CategoryModel;

  constructor(private service: CategoriesService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void { 
    const id = this.activatedRoute.snapshot.paramMap.get('id') as any
    this.service.getById(id)
      .subscribe(category => this.category = category);
  }

  route(): void {
    this.router.navigate(['/categories']);
  }

}
