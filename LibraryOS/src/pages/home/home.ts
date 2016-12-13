import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { BookService } from '../../providers/book-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[BookService]
})
export class HomePage {

  public books: any;
  constructor(public nav: NavController, public bookService: BookService, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    this.bookService.getBooks().then((data) => {
      console.log(data);
      this.books = data;
    });
  }
}
