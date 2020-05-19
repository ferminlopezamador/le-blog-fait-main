import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.scss']
})
export class NavComponentComponent implements OnInit {
  menu = [
    {
      titre : 'article 1 avec beaucoup de caractères',
      url : '#'
    }, {
      titre : 'article 2',
      url : '#'
    }, {
      titre : 'article 3 avec un peu moins',
      url : '#'
    }
  ];
  openMenu = () => {
    const burgerElement = document.getElementsByClassName('burger-element');
    for (let i = 0 ; i < burgerElement.length ; i++) {
    burgerElement[i].classList.add('burger-element-anim');
    }
    setTimeout(function(){
      for (let i = 0 ; i < burgerElement.length ; i++) {
        burgerElement[i].classList.remove('burger-element-anim');
      }
    }, 1500);
    const nav = document.querySelector('#nav-principale');
    if (!nav.classList.contains('hide')) {
      nav.classList.add('hide');
      nav.classList.remove('show');
    } else {
      nav.classList.add('show');
      nav.classList.remove('hide');
    }
  }

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.menu.length ; i++) {
      if (this.menu[i].titre.length > 29) {
        const commas = '...';
        this.menu[i].titre = this.menu[i].titre.substring(-50, 30) + commas;
      }
    }
  }
}
