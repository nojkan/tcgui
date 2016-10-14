import { Component, OnInit } from '@angular/core';
import { Tournoi } from '../model/tournoi';
import { TournoiService } from '../service/tournoi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tournois',
  templateUrl: './tournois.component.html',
  styleUrls: ['./tournois.component.css'],
  providers: [TournoiService]
})
export class TournoisComponent implements OnInit {

   title = 'pay 2 tcg';

  tournois: Tournoi[];

  selectedTournoi: Tournoi;

  constructor(
  	private router: Router,
  	private tournoiService: TournoiService){}
  /*tournoi: Tournoi = {
       id: 1,
       name: 'Interne Senior +',
       price: 13,
       date: '01/10/2016'
   };*/

   onSelect(tournoi: Tournoi): void {
       this.selectedTournoi = tournoi;
   }

   getTournois(): void {
    this.tournoiService.getTournois().then(tournois => this.tournois = tournois);

  }

   ngOnInit(): void {
   	this.getTournois();
  }

  gotoDetail(tournoi: Tournoi): void {
  let link = ['/tournoi', tournoi.id];
  this.router.navigate(link);
}

}
