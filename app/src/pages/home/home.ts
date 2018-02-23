import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InserirEnderecoPage } from '../../pages/inserir-endereco/inserir-endereco';
import { DetalhesEstabelecimentoPage } from '../../pages/detalhes-estabelecimento/detalhes-estabelecimento';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  estabelecimentos = {};
  constructor(public navCtrl: NavController) {
    this.estabelecimentos = [{nome: 'teste'},{nome: 'teste'},{nome: 'teste'},{nome: 'teste'}]
  }

  pageInserirEndereco(){    
    this.navCtrl.push(InserirEnderecoPage);
  }

  usarMinhaLocalizacao(){
    alert('usar minha localizacao')
    //this.navCtrl.push(BuscarPage);
  }

  verDetalhesEstabelecimento(){
    this.navCtrl.push(DetalhesEstabelecimentoPage);
  }
}
