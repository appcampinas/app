import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EuPage } from './eu';

@NgModule({
  declarations: [
    EuPage,
  ],
  imports: [
    IonicPageModule.forChild(EuPage),
  ],
})
export class EuPageModule {}
