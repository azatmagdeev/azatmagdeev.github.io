import {Component, OnInit} from '@angular/core';
import {Competition} from '../schemas';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  data: Competition;
  id: number;

  constructor(
    private http: HttpClient,
    private activateRoute: ActivatedRoute
  ) {
    this.id = activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.http.get('https://api.football-data.org/v2/competitions/'
      + this.id
      , {
        headers: { 'X-Auth-Token' : 'edc03d7baf3c447dae90491ed7246598'}
    }).subscribe(
      (data: Competition) => {
        console.log(data);
        this.data = data;
      }
    );
  }

}
