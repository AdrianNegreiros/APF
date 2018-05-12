import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //ionViewDidLoad() {
  //console.log('ionViewDidLoad SignupPage');
  //}
  toGoTabsPage() {
    this.navCtrl.push(TabsPage);
  }}
