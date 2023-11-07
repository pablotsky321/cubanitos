import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { DataService } from 'services/data.service';
import { FormsModule } from '@angular/forms';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {getFirestore} from 'firebase/firestore'
import { firebaseConfig } from './firebaseConfig';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },DataService,firebaseConfig],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDL7xSIGsS538vrb6CAYxYcn-cwa5LlFy8',
      authDomain: 'cubanitosauth.firebaseapp.com',
      databaseURL: 'https://cubanitosauth-default-rtdb.firebaseio.com',
      projectId: 'cubanitosauth',
      storageBucket: 'cubanitosauth.appspot.com',
      messagingSenderId: '726569153516',
      appId: '1:726569153516:web:4d4b1ee1450668dfc586c9',
      measurementId: 'G-MWQ2CK33Y4',
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db=getFirestore(app);
  }
}
