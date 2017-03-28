import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { JsonpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component'
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "./hero.service"
import { DashboardComponent } from "./dashboard.component"
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    JsonpModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [ RouterModule ],
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ HeroService ]
})
export class AppModule { }




