import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Location }                 from '@angular/common';
import { Tournoi } from '../model/tournoi';

import { TournoiService } from '../service/tournoi.service';

import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'app-tournoi-detail',
  templateUrl: './tournoi-detail.component.html',
  styleUrls: ['./tournoi-detail.component.css'],
  providers: [TournoiService]
})

export class TournoiDetailComponent  implements OnInit{

  @Input()
  tournoi: FirebaseObjectObservable<any>;
  
  //tournoi: Tournoi;

  

 constructor(
      //private route: ActivatedRoute,
      private route: ActivatedRoute,
      private location: Location,
      private af: AngularFire

    ) { /*this.selectedTournois = af.database.object('tournois')*/}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      //this.tournoiService.getTournoi(id).map(tournoi => this.tournoi = tournoi);
      this.tournoi = this.af.database.object('/tournois/2');
      //alert("plop "+this.tournoi);
    });
  }
/*constructor(af: AngularFire,private router: Router) {
    this.competitions = af.database.list('/tournois');
  }*/

  

 /* constructor(af: AngularFire,private router: Router) {
    this.competitions = af.database.list('/tournois');
  }*/
  

  goBack(): void {
  	this.location.back();
  }
}
