import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { AlertasPage } from '../alertas/alertas';
import { PainelPage } from '../painel/painel';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = AlertasPage;
  tab4Root = PainelPage;

  constructor() {

  }
}
