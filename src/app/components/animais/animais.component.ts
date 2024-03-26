import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import pets_data from 'src/app/data/pets_data';
import { Pet } from 'src/app/models/pet';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.scss']
})
export class AnimaisComponent {

  public animals: Array<Pet> = pets_data;

  constructor(private readonly _router:Router, private readonly _route: ActivatedRoute) {
    _router.events.subscribe(events => {
      if (events instanceof NavigationEnd) {
      
      let type: string | undefined;

      const pathVariable = _router.url.replace('/', '');
      
      switch (pathVariable) {
        case 'dogs':
          type = 'dog';
          break;
        case 'cats':
          type = 'cat';
          break;
      }

      this.animals = this.filterAnimalsPerType(type);

    }
  });
  }


  private filterAnimalsPerType(type: string | undefined): Array<Pet> {
    if (!type) return pets_data;
    return pets_data.filter(animal => animal.type === type);
  }
}