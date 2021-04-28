import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Team} from '../schemas';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent implements OnInit {

  team: Team;
  id: number;

  constructor(
    private http: HttpClient,
    private activateRoute: ActivatedRoute
  ) {
    this.id = activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.http.get(
      'https://api.football-data.org/v2/teams/' + this.id,
      {headers: {'X-Auth-Token': 'edc03d7baf3c447dae90491ed7246598'}}
    ).subscribe((team: Team) => this.team = team);
  }

}
