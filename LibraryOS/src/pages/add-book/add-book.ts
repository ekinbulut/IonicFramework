import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import {BookModel} from '../../models/BookModel';
import { BookService } from '../../providers/book-service';

/*
  Generated class for the AddBook page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-book',
  templateUrl: 'add-book.html',
  providers: [BookService]
})
export class AddBookPage {

  Name: String;
  Author: String;
  Publisher: String;
  PublishDate: Number;
  Serie: String;
  Genre: String;
  Shelf: String;
  RackNumber: Number;

  book = new BookModel();

  categories:any;
  authors:any;
  genres:any;
  series:any;
  shelfs:any;

  racks = [1,2,3,4,5,6,7];

  constructor(public viewCtrl: ViewController,public bookService : BookService) { }


  ionViewDidLoad()
  {
     this.bookService.getCategories().then((data)=>{
          this.categories = data;
     });

     this.bookService.getAuthors().then((data)=>{
          this.authors = data;
     });

     this.bookService.getGenres().then((data)=>{
          this.genres = data;
     });

     this.bookService.getSeries().then((data)=>{
          this.series = data;
     });

     this.bookService.getShelfs().then((data)=>{
          this.shelfs = data;
     });
  }

  save(): void {
    
    this.book.Name = this.Name;
    this.book.Details.Author = this.Author;
    this.book.Details.Publisher = this.Publisher;
    this.book.Details.PublishDate = this.PublishDate;
    this.book.Details.Series = this.Serie;
    this.book.Details.Genre = this.Genre;
    this.book.Details.Shelf = this.Shelf;
    this.book.Details.RackNumber = this.RackNumber;



    this.viewCtrl.dismiss(this.book);

  }

  close(): void {

    this.viewCtrl.dismiss();
  }

}
