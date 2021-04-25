import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {

  user: User;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/user.json').subscribe(
      (data: User) => this.user = data
    );
  }

}

// https://api.football-data.org/v2/competitions?X-Auth-Token=edc03d7baf3c447dae90491ed7246598
