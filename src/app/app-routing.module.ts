import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent }   from './users/users.component';
import { UserDetailComponent }  from './user-detail/user-detail.component';
import { TournoisComponent }      from './tournois/tournois.component';
import { TournoiDetailComponent }  from './tournoi-detail/tournoi-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/tournois', pathMatch: 'full' },
  { path: 'users',  component: UsersComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'tournoi/:id', component: TournoiDetailComponent },
  { path: 'tournois',     component: TournoisComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}