import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DateComponentService {
  // getDay = () => {
  //   const date = new Date();
  //   const indiceJourSemaine = date.getDay();
  //   const jourSemaine = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  //   const jour = date.getDate();
  //   const indiceMois = date.getMonth();
  //   const mois = ['Janvier', 'Février', 'Marse', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  //   const annee = date.getUTCFullYear();
  //   return jourSemaine[indiceJourSemaine] + ' ' + jour + ' ' + mois[indiceMois] + ' ' + annee;
  // }

  constructor(public http: HttpClient) { }
}
