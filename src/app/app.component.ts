import { Component } from '@angular/core';
import * as firebase from 'firebase'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bibliotheque';
  constructor() {
    const config = {
      apiKey:'AIzaSyBZ4Uh9pSMRDZ_04hBXW4ghPfSPV1APV-A',
      authDomain:'biblio-d89f7.firebaseapp.com',
      databaseURL: 'biblio-d89f7-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'biblio-d89f7',
      storageBucket: 'biblio-d89f7.appspot.com',
      messagingSenderId: '238682412819'

    }
    firebase.default.initializeApp(config);
  }
}
