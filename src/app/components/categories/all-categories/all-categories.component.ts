import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CategoriesService, CategoryModel } from 'src/app/services/categories.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss']
})
export class AllCategoriesComponent implements OnInit {

  categories$!: BehaviorSubject<CategoryModel[]>;
  
  constructor(private service: CategoriesService, private router: Router) {
    this.categories$ = service.categories$;    
  }

  ngOnChanges(): void{
    this.service.getAll().subscribe(); 
  }

  ngOnInit(): void{ 
    this.service.getAll().subscribe(); 
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
    //this.service.remove(id).subscribe();
  }

}
