import { Component } from '@angular/core';

import { DescobrirPage } from '../descobrir/descobrir';
import { EuPage } from '../eu/eu';
import { HomePage } from '../home/home';
import { PedidosPage } from '../pedidos/pedidos';

@Component({
  templateUrl: 'tabs.html' 
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DescobrirPage; 
  tab3Root = PedidosPage; 
  tab4Root = EuPage; 
  
  constructor() {

  }
}

