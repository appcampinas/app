import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracoesPage');
  }

  editarDados(){
    alert('editarDados');
  }

  meusEnderecos(){
    alert('meusEnderecos');
  }

  sair(){
    alert('sair');
  }

  faleConosco(){
    alert('faleConosco');
  }

  termosUso(){
    alert('termosUso');
  }

  convidar(){
    alert('convidar');
  }

}
