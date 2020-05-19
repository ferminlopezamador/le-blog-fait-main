import { Component, OnInit } from '@angular/core';
import { HoroscopeComponentService } from '../horoscope-component.service';


@Component({
  selector: 'app-asidewhite-component',
  templateUrl: './asidewhite-component.component.html',
  styleUrls: ['./asidewhite-component.component.scss']
})
export class AsidewhiteComponentComponent implements OnInit {
  aside = {
    titre : 'Horoscope',
    text : 'Nostrum nulla culpa quia rerum consequatur temporibus sequi harum, itaque numquam perferendis pariatur alias, consectetur ipsam, voluptate velit quisquam maiores ea. Repellendus?',
    url : 'ldknggnd',
    lien : 'Type de lien'
  };
  today = new Date();
  signes =  [
    {
      image: '../../../assets/img/zodiac/aries.jpg',
      texte: 'Nostrum nulla culpa quia rerum consequatur temporibus sequi harum, itaque numquam perferendis pariatur alias, consectetur ipsam, voluptate velit quisquam maiores ea. Repellendus?'
    },
    {
      image: '../../../assets/img/zodiac/taurus.jpg',
      texte: 'Nostrum nulla culpa quia rerum consequatur temporibus sequi harum, itaque numquam perferendis pariatur alias, consectetur ipsam, voluptate velit quisquam maiores ea. Repellendus?'
    }
  ];
  constructor(public horoscope: HoroscopeComponentService) {
  }

  ngOnInit(): void {
  //   this.horoscope.http.get('https://horoscopeapi-horoscope-v1.p.rapidapi.com/daily').subscribe()
  //   next: function(reponse) {
  //     console.log(reponse);
  //     Const { results }  = reponse;
  //     This.valeurqu’onveut afficher = results; → voir exemple pokemon de thomas
  // },
  //   error: function(erreur) {
  //     console.log(erreur);
  // },
  //   complete: function() {
  //     console.log(‘terminé’);
  // }

  }

}
