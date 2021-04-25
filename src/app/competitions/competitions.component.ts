import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Data} from './data-schema';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {

  data: Data;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/competitions.json').subscribe(
      (data: Data) => this.data = data
    );
  }

}

// https://api.football-data.org/v2/competitions?X-Auth-Token=edc03d7baf3c447dae90491ed7246598
