import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { InserirEnderecoPage } from '../pages/inserir-endereco/inserir-endereco';
import { PedidosPage } from '../pages/pedidos/pedidos';
import { DetalharPedidoPage } from '../pages/detalhar-pedido/detalhar-pedido';
import { DetalhesEstabelecimentoPage } from '../pages/detalhes-estabelecimento/detalhes-estabelecimento';
import { DescobrirPage } from '../pages/descobrir/descobrir';
import { EuPage } from '../pages/eu/eu';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen'; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    InserirEnderecoPage,
    PedidosPage,
    DetalharPedidoPage,
    DetalhesEstabelecimentoPage,
    DescobrirPage,
    EuPage,
    ConfiguracoesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
    HomePage,
    TabsPage,
    InserirEnderecoPage,
    PedidosPage,
    DetalharPedidoPage,
    DetalhesEstabelecimentoPage,
    DescobrirPage,
    EuPage,
    ConfiguracoesPage
  ], 
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
