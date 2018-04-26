import { AlertService } from './../../services/alert.service';
import { TwittPage } from './../twitt/twitt';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Twitt } from '../../interfaces/twitt.interface';
import { twittsMock } from '../../mocks/twitt.mock';
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	twitts: Twitt[] = twittsMock;
	constructor(public navCtrl: NavController, private alertService: AlertService) {}

	openListing(twitt: Twitt) {
		this.navCtrl.push(TwittPage, { twitt });
	}
	addComment(twitt: Twitt) {
		this.alertService.addComment(twitt);
	}

	showAlert(message: string) {
		this.alertService.showAlert(message);
	}
	getLengthComments(twitt: Twitt) {
		return this.alertService.getLengthComments(twitt);
	}
}
