import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger-component',
  templateUrl: './burger-component.component.html',
  styleUrls: ['./burger-component.component.scss']
})
export class BurgerComponentComponent implements OnInit {
  menuOpen = false;

  openMenu = () => {
    const burgerElement = document.getElementsByClassName('burger-element');
    for (let i = 0 ; i < burgerElement.length ; i++) {
    burgerElement[i].classList.add('burger-element-anim');
    }
    setTimeout(function () {
      for (let i = 0 ; i < burgerElement.length ; i++) {
        burgerElement[i].classList.remove('burger-element-anim');
      }
    }, 1000);
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

  }

}
