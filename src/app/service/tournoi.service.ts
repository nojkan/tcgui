import { Injectable } from '@angular/core';

import { Tournoi } from '../model/tournoi';
import { TOURNOIS } from '../mock/mock-tournois';

import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Injectable()
export class TournoiService {

  //constructor() { }
  tournois: FirebaseListObservable<Tournoi[]>;
  

  constructor(public af: AngularFire){

  	this.tournois = af.database.list('/tournois');

  }


  getTournois(): FirebaseListObservable<Tournoi[]>{
  	return this.tournois;
  } // stub	


  getTournoi(id: number): FirebaseObjectObservable<Tournoi>{

    console.log("tournoi=" + (this.af.database.list('/tournois/'+id)));
    return this.af.database.object('/tournois/'+id);

  }


}
