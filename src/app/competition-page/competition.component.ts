import {Component, OnInit} from '@angular/core';
import {Competition, Position, Standings} from '../schemas';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {config} from '../app-config';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionPageComponent implements OnInit {

  competition: Competition;
  id: number;
  standings: Standings;
  tableRow: Position;

  constructor(
    private http: HttpClient,
    private activateRoute: ActivatedRoute
  ) {
    this.id = activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.http.get(
      config.url + 'competitions/' + this.id,
      {headers: config.header}
    ).subscribe(
      (competition: Competition) => {
        this.competition = competition;
      }
    );

    this.http.get(
      config.url + 'competitions/' + this.id + '/standings',
      {headers: config.header}
    ).subscribe(
      (standings: Standings) => {
        console.log(standings);
        this.standings = standings;
      }
    );
  }

}
