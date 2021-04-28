import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Team, Teams} from '../schemas';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  data: Teams;
  id: number;
  count: number;
  teams: Team[];

  constructor(
    private http: HttpClient,
    private activateRoute: ActivatedRoute
  ) {
    this.id = activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.http.get(
      `https://api.football-data.org/v2/competitions/${this.id}/teams`, {
        headers: { 'X-Auth-Token' : 'edc03d7baf3c447dae90491ed7246598'}
      }).subscribe(
      (data: Teams) => {
        console.log(data);
        this.data = data;
        this.count = data.count;
        this.teams = data.teams;
      }
    );
  }

}
