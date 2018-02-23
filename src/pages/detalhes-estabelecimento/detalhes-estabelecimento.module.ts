import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesEstabelecimentoPage } from './detalhes-estabelecimento';

@NgModule({
  declarations: [
    DetalhesEstabelecimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesEstabelecimentoPage),
  ],
})
export class DetalhesEstabelecimentoPageModule {}
