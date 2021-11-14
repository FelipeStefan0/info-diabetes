import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.page.html',
  styleUrls: ['./quest.page.scss'],
})

export class QuestPage implements OnInit {

  constructor(
    private router: Router,
    public storage: Storage,
    ) {  }

  ngOnInit() {
  }

  nome: string = "";
  radioValue;

  quest() {

    const labelName = window.document.getElementsByTagName("ion-label")[0];

    if (this.nome == "") {
      labelName.innerHTML = "<strong style='color: #ce1717;'>Campo obrigatório!</strong>";
    }
    else if (this.radioValue == null) {
      document.getElementById("p").innerHTML = "Preenchimento obrigatório!";
    }
    else {
      labelName.innerText = "Digite aqui";
      document.getElementById("p").innerHTML = "";

      this.storage.set('Usuario', this.nome);

      if (this.radioValue == 3) {
        this.router.navigate(['quest2']);
      }
      else if (this.radioValue == 1 || this.radioValue == 2) {
        this.router.navigate(['tab1/tab2']);
      }
    }
  }
  
}