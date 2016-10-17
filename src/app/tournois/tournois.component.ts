import { Component, OnInit } from '@angular/core';
import { Tournoi } from '../model/tournoi';
import { TournoiService } from '../service/tournoi.service';
import { Router } from '@angular/router';

import {AngularFire, FirebaseListObservable, FirebaseAuth} from 'angularfire2';


@Component({
  selector: 'app-tournois',
  templateUrl: './tournois.component.html',
  styleUrls: ['./tournois.component.css'],
  providers: [TournoiService]
})
export class TournoisComponent /*implements OnInit*/ {

   title = 'pay 2 tcg';

  competitions: FirebaseListObservable<Tournoi[]>

  selectedTournoi: Tournoi;

  //competitions: FirebaseListObservable<Tournoi[]>;

  constructor(public af: AngularFire,private router: Router, public tournoiService: TournoiService,private auth: FirebaseAuth) {
    this.competitions = tournoiService.getTournois();
    //af.auth.subscribe(auth => console.log(auth));
  }

  /*tournoi: Tournoi = {
       id: 1,
       name: 'Interne Senior +',
       price: 13,
       date: '01/10/2016'
   };*/

   //onSelect(tournoi: Tournoi): void {
   //    this.selectedTournoi = tournoi;
   onSelect(tournoi: Tournoi): void {
       this.router.navigate(['/tournois', tournoi.id]);
       //this.selectedTournoi = compet;
     }
      

   /*getTournois(): void {
    this.tournoiService.getTournois().then(tournois => this.tournois = tournois);

  }*/

   /*ngOnInit(): void {
   	this.getTournois();
  }*/

  gotoDetail(compet: Tournoi): void {
  let link = ['/tournoi', compet.id];
  this.router.navigate(link);
}

}
