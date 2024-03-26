import { Component } from '@angular/core';

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
 
}  
  
