import { Component, Input } from '@angular/core';
import { Hero } from './hero';


@Component({
  selector:'my-hero-detail',
  template: `
  <div *ngIf="hero">
    <h2>Selected hero is {{hero.name}} with id {{hero.id}}</h2>
  </div>
  `
})

export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
