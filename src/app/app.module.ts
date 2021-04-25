import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app/app.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {CompetitionsComponent} from './competitions/competitions.component';
import {HttpClientModule} from '@angular/common/http';

// определение маршрутов
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'competitions', component: CompetitionsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  declarations: [AppComponent, HomeComponent, AboutComponent, NotFoundComponent, CompetitionsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
