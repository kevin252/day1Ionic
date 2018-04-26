import { AlertService } from './../../services/alert.service';
import { Twitt } from './../../interfaces/twitt.interface';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
	selector: 'page-twitt',
	templateUrl: 'twitt.html'
})
export class TwittPage {
	twitt: Twitt;
	constructor(
		public navCtrl: NavController,
		public alertCtrl: AlertController,
		public navParams: NavParams,
		private alertService: AlertService
	) {
		this.twitt = navParams.get('twitt');
	}
	addComment() {
		this.alertService.addComment(this.twitt);
	}

	showAlert(message: string) {
		this.alertService.showAlert(message);
	}
	getLengthComments() {
		return this.alertService.getLengthComments(this.twitt);
	}
}
