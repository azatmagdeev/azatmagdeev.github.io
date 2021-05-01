import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Area, Areas, Team, Teams} from '../schemas';
import {config} from '../app-config';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsPageComponent implements OnInit {
  data: Teams;
  id: string | undefined;
  count: number;
  teams: Team[];
  url: string;
  areas: Area[];
  currentArea: Area;

  constructor(
    private http: HttpClient,
    private activateRoute: ActivatedRoute
  ) {
    this.id = activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {

    // get areas:
    this.http.get('../assets/areas.json')
      .subscribe((data: Areas) => {
        this.areas = data.areas.filter(area => area.parentAreaId === 2077); // Europe
        console.log(this.areas);
      });

    // get teams:
    this.getTeams();
  }

  handleChangeArea(e): void {
    this.currentArea = this.areas.find(area => area.id === Number(e.target.value));
    console.log('this.currentArea', this.currentArea);
    this.getTeams();
  }

  private getTeams(): void {
    if (typeof this.id === 'string') {
      this.url = `${config.url}competitions/${this.id}/teams`;
    }
    if (typeof this.id === 'undefined') {
      this.url = `${config.url}teams`;
    }
    if (this.currentArea) {
      this.url += `?areas=${this.currentArea.id}`;
    }
    console.log(this.url);
    this.http.get(this.url, {headers: config.header})
      .subscribe((data: Teams) => {
          console.log(data);
          this.data = data;
          this.count = data.count;
          this.teams = data.teams;
          if (!this.currentArea) {
            this.currentArea = this.areas.find(area => area.id === data.filters?.areas[0]);
          }
        }
      );
  }
}
