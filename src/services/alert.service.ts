import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Twitt } from '../interfaces/twitt.interface';

@Injectable()
export class AlertService {
	constructor(public alertCtrl: AlertController) {}
	showAlert(message: string) {
		let alert = this.alertCtrl.create({
			title: message,
			buttons: [ 'OK' ]
		});
		alert.present();
	}
	addComment(twitt: Twitt) {
		let comment = this.alertCtrl.create({
			inputs: [
				{
					name: 'comment',
					placeholder: 'Twittea tu respuesta'
				}
			],
			buttons: [
				{
					text: 'Ok',
					handler: (data) => {
						if (data.comment !== '') {
							twitt.comments.push({ comment: data.comment });
						}
					}
				}
			]
		});
		comment.present();
	}
	getLengthComments(twitt: Twitt) {
		return twitt.comments.length;
	}
}
