import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { BookService } from '../../providers/book-service';
import { AddBookPage } from '../add-book/add-book';

import {BookModel} from '../../models/BookModel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [BookService]
})
export class HomePage {

  addbookpage = AddBookPage;

  public books:any;
  constructor(public nav: NavController, public bookService: BookService, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    this.bookService.getBooks().then((data) => {
      console.log(data);
      this.books = data;
    });
  }

  addBook() {
    let modal = this.modalCtrl.create(AddBookPage);

    modal.onDidDismiss(book => {
      if (book) {
        console.log(book);
        this.books.push(book);
        this.bookService.createBook(book);
      }
    });

    modal.present();
  }
}
