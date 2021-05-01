import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app/app.component';
import {AboutComponent} from './about/about.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {CompetitionsPageComponent} from './competitions-page/competitions.component';
import {CompetitionPageComponent} from './competition-page/competition.component';
import {TeamsPageComponent} from './teams-page/teams.component';
import {TeamPageComponent} from './team-page/team-page.component';
import { TeamItemComponent } from './team-item/team-item.component';

// определение маршрутов
const appRoutes: Routes = [
  {path: '', component: CompetitionsPageComponent},
  {path: 'competitions', component: CompetitionsPageComponent},
  {path: 'competitions/:id', component: CompetitionPageComponent},
  {path: 'competitions/:id/teams', component: TeamsPageComponent},
  {path: 'teams', component: TeamsPageComponent},
  {path: 'teams/:id', component: TeamPageComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    NotFoundComponent,
    CompetitionsPageComponent,
    CompetitionPageComponent,
    TeamsPageComponent,
    TeamPageComponent,
    TeamItemComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
