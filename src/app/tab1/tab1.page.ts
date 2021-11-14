import { Component, ViewChild } from '@angular/core';

import { Platform, AlertController, IonRouterOutlet } from '@ionic/angular';
//import { Location } from '@angular/common';

import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  @ViewChild(IonRouterOutlet, { static: true }) routerOutlet: IonRouterOutlet;

  constructor(
    private platform: Platform,
    private alertController: AlertController,
    //private location: Location
    private router: Router,
  ) {
    this.backButtonEvent();
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(1, () => {
      this.backButtonAlert();
    });
  }

  async backButtonAlert() {
    if (this.router.url === "/tab1/tab2") {
      const alert = await this.alertController.create({
        message: "Deseja fechar o aplicativo?",
        buttons: [{
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Fechar',
          handler: () => {
            navigator['app'].exitApp();
          }
        }
        ]
      });
      await alert.present();
    }
    else {
      this.router.navigate(['tab1/tab2'])
    }
  }
}
