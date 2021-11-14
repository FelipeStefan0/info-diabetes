import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-voltar',
  templateUrl: './btn-voltar.page.html',
  styleUrls: ['./btn-voltar.page.scss'],
})
export class BtnVoltarPage{

  constructor( private router: Router ) { }

  voltar() {
    this.router.navigate(['tab1/tab3'])
  }
}
