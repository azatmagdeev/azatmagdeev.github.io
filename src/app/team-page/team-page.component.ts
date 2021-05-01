import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Competition, Team} from '../schemas';
import {ActivatedRoute} from '@angular/router';
import {config} from '../app-config';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent implements OnInit {

  team: Team;
  id: number;
  activeCompetitions: Competition[];

  constructor(
    private http: HttpClient,
    private activateRoute: ActivatedRoute
  ) {
    this.id = activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.http.get(
      config.url + 'teams/' + this.id,
      {headers: config.header}
    ).subscribe((team: Team) => {
        console.log(team);
        this.team = team;
        this.activeCompetitions = team.activeCompetitions.filter(
          competition => competition.plan === 'TIER_ONE'
        );
      }
    );
  }

}
