import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  nome = "";

  constructor(
    public storage: Storage,
    ) { }

  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,

  }

  ngOnInit() {
    this.generateName();  
  }

  async generateName() {
    this.nome = await this.storage.get('Usuario');
  }
}
