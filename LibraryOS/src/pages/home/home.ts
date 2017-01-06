import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { BookService } from '../../providers/book-service';
import { AddBookPage } from '../add-book/add-book';

import { BookModel } from '../../models/BookModel';
import { NativeStorage } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [BookService]
})
export class HomePage {

  addbookpage = AddBookPage;



  public books: any;
  constructor(public nav: NavController, public bookService: BookService, public modalCtrl: ModalController) {

    NativeStorage.setItem('myitem', { property: 'value', anotherProperty: 'anotherValue' })
      .then(
      () => console.log('Stored item!'),
      error => console.error('Error storing item', error)
      );

    NativeStorage.getItem('myitem')
      .then(
      data => console.log(data),
      error => console.error(error)
      );

  }

  ionViewDidLoad() {

    this.initialRequest();
  }

  initialRequest() {


    this.bookService.getBooks().then((data) => {
      //console.log(data);
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
