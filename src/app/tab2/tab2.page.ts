import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  gender!: string;
  age!: number;
  height!: number;
  weight!: number;
  bmr!: number;

  constructor(private alertController: AlertController) {}

  calculateBMR() {
    if (this.gender === 'male') {
      this.bmr = 88.36 + (13.4 * this.weight) + (4.8 * this.height) - (5.7 * this.age);
    } else {
      this.bmr = 447.6 + (9.2 * this.weight) + (3.1 * this.height) - (4.3 * this.age);
    }
  }

  async showResult() {
    const alert = await this.alertController.create({
      header: 'BMR Result',
      message: `Your BMR is ${this.bmr.toFixed(2)}`,
      buttons: ['OK']
    });

    await alert.present();
  }
}
