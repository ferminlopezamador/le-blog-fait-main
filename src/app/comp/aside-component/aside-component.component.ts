import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-component',
  templateUrl: './aside-component.component.html',
  styleUrls: ['./aside-component.component.scss']
})
export class AsideComponentComponent implements OnInit {
  categories = [
    {
      icone : '../../../assets/font/icons/icons/card-checklist.svg',
      nom : 'Première catégorie',
      lien : 'gldfndfkj'
    },
    {
      icone : '../../../assets/font/icons/icons/graph-up.svg',
      nom : 'deuxième catégorie',
      lien : 'fndfkj'
    },
    {
      icone : '../../../assets/font/icons/icons/mic.svg',
      nom : 'troisième',
      lien : 'fckutcjykj'
    }
  ];
  aside = {
    titre : 'Titre de l\'aside',
    text : 'Nostrum nulla culpa quia rerum consequatur temporibus sequi harum, itaque numquam perferendis pariatur alias, consectetur ipsam, voluptate velit quisquam maiores ea. Repellendus?',
    url : 'ldknggnd',
    lien : 'Type de lien'
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.categories[0].icone)
  }

}
