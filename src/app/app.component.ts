import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // Intervalo entre os slides
  public slideInterval = 2000;
  // Índice do slide ativo
  public activeSlideIndex = 0;
  // Título da página atual
  public pageCurrentTitle = 'Todos os animais disponiveis para adoção'; 

  // Array de slides
  public slides: Array<{image: string; text? : string}> = [
    {image: 'assets/images/caogato.jpeg'},
    {image: 'assets/images/caes.jpeg'},
    {image: 'assets/images/gatos.jpeg'},
  ];

  // Títulos das páginas
  private _pageTitles: Array<{path: RegExp; title: string}> = [
    {path: /^\/todos/, title: 'Todos os animais disponiveis para adoção'},
    {path: /^\/dogs/, title: 'Cachorros disponiveis para adoção'},
    {path: /^\/cats/, title: 'Gatos disponiveis para adoção'},
  ];

  constructor(private readonly _router: Router) {
    // Inscreve-se para os eventos do roteador
    _router.events.subscribe(events => {
      // Verifica se o evento é do tipo NavigationEnd
      if (events instanceof NavigationEnd) {
        // Atualiza o título da página com base na URL
        this.pageCurrentTitle = this._pageTitles
        .find(pageTitle => pageTitle.path.test(_router.url))?.title ??
        'Animais disponiveis para adoção';
      }
    });
  }
}