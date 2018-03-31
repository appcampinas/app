import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';

/**
 * Generated class for the EuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eu',
  templateUrl: 'eu.html',
})
export class EuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EuPage');
  }

  abrirConfiguracoes(){
    this.navCtrl.push(ConfiguracoesPage); 
  }

}
