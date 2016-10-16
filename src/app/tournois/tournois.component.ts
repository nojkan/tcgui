import { Component, OnInit } from '@angular/core';
import { Tournoi } from '../model/tournoi';
import { TournoiService } from '../service/tournoi.service';
import { Router } from '@angular/router';

import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'app-tournois',
  templateUrl: './tournois.component.html',
  styleUrls: ['./tournois.component.css'],
  providers: [TournoiService]
})
export class TournoisComponent /*implements OnInit*/ {

   title = 'pay 2 tcg';

  //tournois: Tournoi[]; identiue competitions

  selectedTournoi: Tournoi;

  competitions: FirebaseListObservable<Tournoi[]>;

  constructor(af: AngularFire,private router: Router) {
    this.competitions = af.database.list('/tournois');
  }

  /*tournoi: Tournoi = {
       id: 1,
       name: 'Interne Senior +',
       price: 13,
       date: '01/10/2016'
   };*/

   //onSelect(tournoi: Tournoi): void {
   //    this.selectedTournoi = tournoi;
   onSelect(compet: Tournoi): void {
       this.selectedTournoi = compet;
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
