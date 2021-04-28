import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app/app.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {CompetitionsComponent} from './competitions/competitions.component';
import {HttpClientModule} from '@angular/common/http';
import {CompetitionComponent} from './competition/competition.component';
import {TeamsComponent} from './teams/teams.component';

// определение маршрутов
const appRoutes: Routes = [
  {path: '', component: CompetitionsComponent},
  {path: 'competitions', component: CompetitionsComponent},
  {path: 'competitions/:id', component: CompetitionComponent},
  {path: 'competitions/:id/teams', component: TeamsComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    CompetitionsComponent,
    CompetitionComponent,
    TeamsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
