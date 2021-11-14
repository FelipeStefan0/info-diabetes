import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor( private router: Router ) {}

  asDIB() {
    this.router.navigate(['btn-voltar/assunt-diabetes'])
  }
  asAE() {
    this.router.navigate(['btn-voltar/assunt-ae'])
  }
  asIG() {
    this.router.navigate(['btn-voltar/assunt-ig'])
  }
  asCARB() {
    this.router.navigate(['btn-voltar/assunt-carb'])
  }
  asMV() {
    this.router.navigate(['btn-voltar/assunt-mv'])
  }
}
