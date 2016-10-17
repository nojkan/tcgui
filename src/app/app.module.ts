import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { FIREBASE_PROVIDERS, AngularFireModule, defaultFirebase,firebaseAuthConfig, AuthProviders,AuthMethods } from 'angularfire2';


import { AppComponent } from './app.component';
import { TournoiDetailComponent } from './tournoi-detail/tournoi-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { TournoisComponent } from './tournois/tournois.component';
import { UsersComponent } from './users/users.component';

import { AppRoutingModule }     from './app-routing.module';

import { TournoiService } from './service/tournoi.service'

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDn4qKI9GXO2bIbYjsjNWpAsc3w2WcOZhw',
  authDomain: 'tcgpay-908ad.firebaseapp.com',
  databaseURL: 'https://tcgpay-908ad.firebaseio.com',
  storageBucket: 'tcgpay-908ad.appspot.com',
  messagingSenderId: '773314518903'
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}

@NgModule({
  declarations: [
    AppComponent,
    TournoiDetailComponent,
    TournoisComponent,
    UsersComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig,myFirebaseAuthConfig)
  ],
  providers: [TournoiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
