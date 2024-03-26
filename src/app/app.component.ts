import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public slideInterval = 2000;
  public activeSlideIndex = 0;
  public pageCurrentTitle = 'Todos os animais disponiveis para adoção'; 

  public slides: Array<{image: string; text: string}> = [
    {image: 'assets/images/cats-dogs-carousel.jpeg', text: 'cachorros e gatos'},
    {image: 'assets/images/dogs-carousel.jpeg' , text: 'cachorros'},
    {image: 'assets/images/cats-carousel.jpeg', text: 'gatos'},
  ];

  private _pageTitles: Array<{path: RegExp; title: string}> = [
    {path: /^\/todos/, title: 'Todos os animais disponiveis para adoção'},
    {path: /^\/dogs/, title: 'Cachorros disponiveis para adoção'},
    {path: /^\/cats/, title: 'Gatos disponiveis para adoção'},
  ];

  constructor(private readonly _router: Router) {
    _router.events.subscribe(events => {
      if (events instanceof NavigationEnd) {
        console.log(_router.url);
        this.pageCurrentTitle = this._pageTitles
        .find(pageTitle => pageTitle.path.test(_router.url))?.title??
        'Animais disponiveis para adoção';
      }
    });
    
  }
 
}  
  
