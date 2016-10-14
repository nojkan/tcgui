/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TournoiService } from './tournoi.service';

describe('Service: Tournoi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TournoiService]
    });
  });

  it('should ...', inject([TournoiService], (service: TournoiService) => {
    expect(service).toBeTruthy();
  }));
});
