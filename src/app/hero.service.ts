import { Injectable } from '@angular/core'
import { HEROES } from './mock-heroes'
import { Hero } from './hero'
import { Jsonp } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class HeroService {

  constructor(private jsonp: Jsonp) {}

 // private httpUrl = 'http://api.worldbank.org/countries/us/indicators/SH.XPD.PRIV.ZS?date=2000:2002&format=jsonP&prefix=JSONP_CALLBACK';

  private httpUrl = 'http://mysafeinfo.com/api/data?list=englishmonarchs&format=jsonP&callback=JSONP_CALLBACK';


  getHeroes(): Promise<Hero[]> {

    return Promise.resolve(HEROES)
  }

  test(): void {
    console.log("this is good");

    this.jsonp.request(this.httpUrl, { method: 'Get' }).subscribe(data => {
      console.log(data._body);
    });

  }

}
