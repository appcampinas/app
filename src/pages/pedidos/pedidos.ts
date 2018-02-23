import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalharPedidoPage } from '../../pages/detalhar-pedido/detalhar-pedido';
/**
 * Generated class for the PedidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {
  pedidos : {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidosPage');
    this.carregaPedidos();
  }

  carregaPedidos(){
    this.pedidos = [
      {cod: 1, nome: 'TIA SÔ CAMPINAS',dataCompra: '18 de janeiro 2018', descrocao: "caixa com 300 unidades"},
      {cod: 2, nome: 'PIZZA HUT', dataCompra: '20 de janeiro 2018', descricao: "caixa com 300 unidades"}
    ];
  }

  detalharPedido(cod){
    this.navCtrl.push(DetalharPedidoPage);
  }

}
