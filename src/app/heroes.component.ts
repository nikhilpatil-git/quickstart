import { Component, OnInit } from '@angular/core';
import { Hero } from './hero'
import { HeroService } from './hero.service'
import { Router }            from '@angular/router';

@Component({
  selector: 'my-heroes',
  providers: [HeroService],
  templateUrl: './app/templates/hero.component.html',
  styleUrls: ['./app/css/hero.component.css']
})

export class HeroesComponent implements OnInit{
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService,  private router: Router){}

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    console.log('cliking');
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
