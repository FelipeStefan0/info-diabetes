import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Storage } from '@ionic/storage';
import { SplashScreen } from '@capacitor/splash-screen'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [
    ScreenOrientation
  ]
})

export class AppComponent {
  private _storage: Storage | null = null;

  constructor(
    private platform: Platform,
    private screenOrientation: ScreenOrientation,
    public storage: Storage,
    private router: Router,
  ) {
    this.initializeApp();
    this.init();
    this.iniciar();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      SplashScreen.show({
        showDuration: 3000,
        autoHide: true,
        fadeInDuration: 100,
        fadeOutDuration: 100,
      })
    });
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(name, value) {
    this._storage.set(name, value);
  }

  iniciar(){
    this.storage.get('Usuario').then(name => {
      if(name) {
        this.router.navigate(['tab1/tab2']);
      }
      else {
        this.router.navigate(['loader']);
      }
    })
  }
}
