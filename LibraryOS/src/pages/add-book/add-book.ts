import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the AddBook page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-book',
  templateUrl: 'add-book.html'
})
export class AddBookPage {

  Name: String;
  Author:String;
  Publisher:String;
  PublishDate:Number;
  Series:String;
  Genre:String;
  Shelf:String;
  RackNumber:Number;

  constructor(public viewCtrl: ViewController) { }

  save(): void {

    let book = {
      CreationDate:Date.now,
      Name: this.Name,
      Details: {
        Author: "test author",
        Publisher: "test publisher",
        PublishDate: 9999,
        Series: "null",
        Genre: "null",
        Shelf: "null",
        RackNumber: 9
      }

    };

    this.viewCtrl.dismiss(book);

  }

}
