import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BookService } from '../providers/book-service';
import { AddBookPage } from '../pages/add-book/add-book';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddBookPage


  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddBookPage

  ],
  providers: [BookService]
})
export class AppModule {}
