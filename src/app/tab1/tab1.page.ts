import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  height!: number;
  weight!: number;
  bmi!: number;

  constructor(private alertController: AlertController) {}

  calculateBMI() {
    const heightMeters = this.height / 100;
    this.bmi = this.weight / (heightMeters * heightMeters);
  }

  getResult() {
    if (this.bmi < 18.5) {
      return 'Underweight';
    } else if (this.bmi >= 18.5 && this.bmi < 25) {
      return 'Normal weight';
    } else if (this.bmi >= 25 && this.bmi < 30) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }

  async showResult() {
    const alert = await this.alertController.create({
      header: 'BMI Result',
      message: `Your BMI is ${this.bmi.toFixed(2)} (${this.getResult()})`,
      buttons: ['OK']
    });

    await alert.present();
  }
}