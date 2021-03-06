import { Injectable } from '@angular/core'
import { HEROES } from './mock-heroes'
import { Hero } from './hero'
import { Jsonp } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class HeroService {

  getHero(id: number): Promise<Hero>{
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id))
  }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES)
  }

}
