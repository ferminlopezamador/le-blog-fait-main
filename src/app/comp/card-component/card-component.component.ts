import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent implements OnInit {
  textCard = {
    categorie : 'une catégorie',
    titre : 'Titre de la carte un peu long',
    resume : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet interdum eros, sed posuere libero pellentesque id. Donec porta velit non metus tincidunt.',
    lien : 'En savoir plus',
    url : 'footer'
  };

  constructor() { }

  ngOnInit(): void {
    if (this.textCard.resume.length > 100) {
      const commas = '...';
      this.textCard.resume = this.textCard.resume.substring(-50, 101) + commas;
    }
  }

}
