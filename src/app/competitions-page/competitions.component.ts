import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Competitions} from '../schemas';
import {config} from '../app-config';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsPageComponent implements OnInit {

  data: Competitions;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(
      config.url + 'competitions?area=2077&plan=TIER_ONE',
      {headers: config.header}
    ).subscribe(
      (data: Competitions) => this.data = data
    );
  }

}

// https://api.football-data.org/v2/competitions?X-Auth-Token=edc03d7baf3c447dae90491ed7246598
