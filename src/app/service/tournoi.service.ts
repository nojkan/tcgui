import { Injectable } from '@angular/core';

import { Tournoi } from '../model/tournoi';
import { TOURNOIS } from '../mock/mock-tournois';

@Injectable()
export class TournoiService {

  constructor() { }

  getTournois(): Promise<Tournoi[]> {
  	return Promise.resolve(TOURNOIS);
  } // stub	


  getTournoi(id: number): Promise<Tournoi> {
  return this.getTournois()
             .then(tournois => tournois.find(tournoi => tournoi.id === id));
  }


}
