import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Hero} from "./hero";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 12, name: 'Craig Christ'},
      {id: 13, name: 'Rubber Person'},
      {id: 14, name: 'Freedom Guy'},
      {id: 15, name: 'Drug-free Boy'},
      {id: 16, name: 'Ol\' Dood'},
      {id: 17, name: 'Single Mom'},
      {id: 18, name: 'Florida Man'},
      {id: 19, name: 'Pablo'},
      {id: 20, name: 'Immigration Dude'},
      {id: 21, name: 'Absentee Dad'},
      {id: 22, name: 'Homeless Woman'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
