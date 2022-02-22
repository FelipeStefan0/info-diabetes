import { Component, OnInit } from '@angular/core';
import { perguntas } from '../../assets/perguntas'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss'],
})

export class Tab7Page implements OnInit {

  radioValue;

  contador = 0;
  quest = 0;
  pontos = 0;

  exec = 0;

  show = 0;

  varC = "";
  varE = "";

  repetida = [];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  getRandom(min, max) {
    for (var i = 0; i < perguntas.length; i++) {
      var numb = Math.floor(Math.random() * (max - min + 1)) + min;
      if (this.repetida.indexOf(numb) === -1) {
        this.repetida.push(numb);
      }
      else if (this.repetida.indexOf(numb) !== -1) {
        i--;
        numb = Math.floor(Math.random() * (max - min + 1)) + min;
      }
    }
  }




  comecar() {
    this.getRandom(0, perguntas.length - 1)
    console.log(this.repetida)
    this.exec++;
    this.contador++;
    document.getElementById('enunciados').style.display = "block";
    document.getElementById('enunciadoText').innerHTML = perguntas[this.repetida[this.quest]].enunciado;
    for (var i = 0; i < perguntas[this.repetida[this.quest]].alternativas.length; i++) {
      document.getElementById('radioText').innerHTML += perguntas[this.repetida[this.quest]].alternativas[i] + "<br>";
    }

  }




  

  proximo() {
    if (this.radioValue == "") {
      return null;
    }
    else if (this.radioValue == 0 || this.radioValue == 1){
      this.show++;
      if (this.radioValue == perguntas[this.repetida[this.quest]].resposta) {
        this.pontos++;
        console.log('acertou')
        this.varC += (this.exec) + ") " + perguntas[this.repetida[this.quest]].textEnunciado + ":" + " <br>" + perguntas[this.repetida[this.quest]].textAlternativas[perguntas[this.repetida[this.quest]].resposta] + "<br><br>";
        document.getElementById('correto').style.backgroundColor = "green";
      }
      else {
        console.log('errou')
        this.varE += (this.exec) + ") " + perguntas[this.repetida[this.quest]].textEnunciado + ":" + "<br>" + perguntas[this.repetida[this.quest]].textAlternativas[perguntas[this.repetida[this.quest]].resposta] + "<br><br>";
        document.getElementById('correto').style.backgroundColor = "green";
      }

      this.quest++;
      setTimeout(() => {
        this.radioValue = '';
        this.contador++;
        document.getElementById('enunciadoText').innerHTML = perguntas[this.repetida[this.quest]].enunciado;
        document.getElementById('radioText').innerHTML = "";
        for (var i = 0; i < perguntas[this.repetida[this.quest]].alternativas.length; i++) {
          document.getElementById('radioText').innerHTML += perguntas[this.repetida[this.quest]].alternativas[i] + "<br>";
        }
        this.show--;
      }, 2000);

      document.getElementsByName('radioResp')[0].setAttribute('disabled', 'disabled');
      document.getElementsByName('radioResp')[1].setAttribute('disabled', 'disabled');

      setTimeout(() => {
        this.exec++;
        if (this.exec > 5) {
          document.getElementById('respCertas').innerHTML = this.varC;
          document.getElementById('respErradas').innerHTML = this.varE;
        }
      }, 2000);

      setTimeout(() => {
        document.getElementById('temporizador').innerText = '1...';
      }, 1000);
    }
  }

  sair() {

    this.radioValue = "";

    this.contador = 0;
    this.quest = 0;
    this.pontos = 0;

    this.exec = 0;

    this.varC = "";
    this.varE = "";

    this.repetida = [];

    this.router.navigate(['tab1/tab7']);

  }

}