import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService, CategoryModel } from 'src/app/services/categories.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss']
})
export class AllCategoriesComponent implements OnInit {

  categories: CategoryModel[] = [];
  
  constructor(private service: CategoriesService, private router: Router) { }

  ngOnInit(): void{ 
    this.service.getAll().subscribe(categories => this.categories = categories); 
  }

  routeMain(): void {
    this.router.navigate(['/']); 
  }

  details(id: number): void{ 
    this.router.navigate(['/categories', id]); 
  }

  routeAdd(): void{ 
    this.router.navigate(['/categories/add']); 
  }

  routeUpdate(id: number): void{ 
    this.router.navigate([`/categories/${id}/edit`]); 
  }

  remove(id: number): void{
    this.service.remove(id)
      .subscribe(() => {
        window.location.reload();
      });
  }

}
