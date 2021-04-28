import {Component, OnInit} from '@angular/core';
import {Competition} from '../schemas';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionPageComponent implements OnInit {

  competition: Competition;
  id: number;

  constructor(
    private http: HttpClient,
    private activateRoute: ActivatedRoute
  ) {
    this.id = activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.http.get(
      'https://api.football-data.org/v2/competitions/'
      + this.id,
      {
        headers: {'X-Auth-Token': 'edc03d7baf3c447dae90491ed7246598'}
      }).subscribe(
      (competition: Competition) => {
        console.log(competition);
        this.competition = competition;
      }
    );
  }

}
