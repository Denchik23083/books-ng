import { Component, OnInit } from '@angular/core';
import { BookModel, BooksService } from '../services/books-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.scss']
})
export class UpdateBooksComponent implements OnInit {

  

  constructor(private readonly service: BooksService, private router: Router) { }

  ngOnInit(): void {
  } 

}
