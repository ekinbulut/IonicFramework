import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { BookService } from '../../providers/book-service';
import { AddBookPage } from '../add-book/add-book';

import { Storage } from '@ionic/storage';

import { BookModel } from '../../models/BookModel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [BookService]
})
export class HomePage {

  addbookpage = AddBookPage;



  public books: any;
  constructor(public nav: NavController, public bookService: BookService, public modalCtrl: ModalController, public storage: Storage) {


  }

  ionViewDidLoad() {

    this.initialRequest();
  }

  initialRequest() {


      this.bookService.getBooks().then((data) => {
        //console.log(data);
        this.books = data;
      });

      this.storage.set('records', this.books);

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
