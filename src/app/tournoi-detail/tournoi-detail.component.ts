import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Location }                 from '@angular/common';
import { Tournoi } from '../model/tournoi';

import { TournoiService } from '../service/tournoi.service';

import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'app-tournoi-detail',
  templateUrl: './tournoi-detail.component.html',
  styleUrls: ['./tournoi-detail.component.css'],
  providers: [TournoiService]
})

export class TournoiDetailComponent {

  @Input()  
  tournoi: FirebaseObjectObservable<Tournoi>;

  

 constructor(
      //private route: ActivatedRoute,
      private route: ActivatedRoute,
      private location: Location,
      af: AngularFire,
      public tournoiService: TournoiService

    ) { 
      
      this.route.params.forEach((params: Params) => {
        let id = +params['id'];
        console.log("id="+id);
        this.tournoi = tournoiService.getTournoi(id);
      })
    }



      

  /*ngOnInit(): void {
    
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.tournoi = this.af.database.ref('/tournoi/'+id);
      //this.tournoiService.getTournoi(id).map(tournoi => this.tournoi = tournoi);
      this.tournoi.once('value').then (function(snapshots) {
          console.log(snapshots.child(name).key)
          console.log(snapshots.child(name).val())
       
      })
      //alert("plop "+this.tournoi);
    });
  }*/


  

 

  goBack(): void {
  	this.location.back();
  }
}
