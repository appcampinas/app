import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalharPedidoPage } from './detalhar-pedido';

@NgModule({
  declarations: [
    DetalharPedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalharPedidoPage),
  ],
})
export class DetalharPedidoPageModule {}
