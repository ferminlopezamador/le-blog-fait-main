import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {
  titre = 'Le blog fait main.';
  textIntro = {
    titre : 'Titre de bienvenu',
    resume : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet interdum eros, sed posuere libero pellentesque id. Donec porta velit non metus tincidunt.',
    lien : 'En savoir plus',
    url : 'footer'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
