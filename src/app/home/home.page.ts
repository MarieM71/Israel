import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController) {
  }
    async info() {
      const alert = await this.alertController.create({
        message: 'Apontar com o escaner num porta-chave, apertar no botão na esquerda do dispositivo para registrar-lo no histórico. ',
        buttons: ['OK']
      });
  
      await alert.present();
    }
    
  }
