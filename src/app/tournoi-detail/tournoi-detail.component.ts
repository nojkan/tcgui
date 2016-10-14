import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Tournoi } from '../model/tournoi';

import { TournoiService } from '../service/tournoi.service';

@Component({
  selector: 'app-tournoi-detail',
  templateUrl: './tournoi-detail.component.html',
  styleUrls: ['./tournoi-detail.component.css']
})
export class TournoiDetailComponent implements OnInit {

  @Input()
  tournoi: Tournoi;

  constructor(
  		private tournoiService: TournoiService,
  		private route: ActivatedRoute,
  		private location: Location

  	) {}

  ngOnInit(): void {
	  this.route.params.forEach((params: Params) => {
	    let id = +params['id'];
	    this.tournoiService.getTournoi(id)
	      .then(tournoi => this.tournoi = tournoi);
	  });
	}

  goBack(): void {
  	this.location.back();
  }
}
