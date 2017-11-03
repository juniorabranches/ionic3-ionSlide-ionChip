import { NavController, Slides, Platform } from 'ionic-angular';
import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  allCurrencies = [{
    name: 'Real',
    color: '#6064FC'
  }, {
    name: 'Bitcoin',
    color: '#99D6D9'
  }, {
    name: 'Litecoin',
    color: '#A5A3DD'
  },{
    name: 'Ethereum',
    color: '#4F99F0'
  }, {
    name: 'Monero',
    color: '#f8ab02'
  }, {
    name: 'Dash',
    color: '#ff1616'
  }, {
    name: 'MartexCoin',
    color: '#16ff89'
  }, {
    name: 'Prosper',
    color: '#b016ff'
  },{
    name: 'SingularDTV',
    color: '#FF640C'
  }];

  selectedCurrencies = [];

  constructor(public navCtrl: NavController, public platform: Platform) {}

  addCurrencie(currencie){
    if(this.selectedCurrencies.indexOf(currencie) === -1){
      this.selectedCurrencies.push(currencie);
    }
  }

  deleteCurrencie(currencie) {
    this.selectedCurrencies.splice(this.selectedCurrencies.indexOf(currencie),1);
  }

}
