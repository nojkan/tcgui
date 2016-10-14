import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { TournoiDetailComponent } from './tournoi-detail/tournoi-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { TournoisComponent } from './tournois/tournois.component';
import { UsersComponent } from './users/users.component';

import { AppRoutingModule }     from './app-routing.module';
import { AppRoutingComponent } from './app-routing/app-routing.component';

import { TournoiService } from './service/tournoi.service'

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
    AppRoutingModule
  ],
  providers: [TournoiService],
  bootstrap: [AppComponent]
})



export class AppModule { }
