import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBhCu7jefIdNwX5V1s3sCFkNMmxzlv9UBA',
      authDomain: 'ng-recipe-book-a2c18.firebaseapp.com'
    });
  }

}
