import { Injectable } from '@angular/core';

import { Tournoi } from '../model/tournoi';
import { TOURNOIS } from '../mock/mock-tournois';

import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Injectable()
export class TournoiService {

  //constructor() { }
  tournois: FirebaseListObservable<Tournoi[]>;
  af: AngularFire; 

  constructor(){

  	this.tournois = this.af.database.list('/tournois');

  }


  getTournois(): FirebaseListObservable<Tournoi[]>{
  	return this.tournois;
  } // stub	


  getTournoi(id: number): FirebaseObjectObservable<Tournoi>{
  return this.af.database.object('/tournois/'+id);
  }


}
