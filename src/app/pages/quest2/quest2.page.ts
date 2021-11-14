import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quest2',
  templateUrl: './quest2.page.html',
  styleUrls: ['./quest2.page.scss'],
})
export class Quest2Page implements OnInit {

  opcao = 0;
  genero;
  generoSelect;
  cintura;
  cinturaMulher;
  cinturaHomem;
  valorFamiliar;
  valorAlimentar;
  valorExerc;
  imc: number;
  idade: number;
  altura: number;
  peso: number;
  naosei: number;

  aparecerTopicoA=0;
  aparecerTopicoE=0;

  msg = 0;
  imcText: string;

  constructor(private router: Router) { }

  option = {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 6,
  }

  ngOnInit() {
  }

  calcular() {
    this.peso;
    this.altura;

    this.imc = this.peso / (this.altura * this.altura);
    this.imcText = this.imc.toFixed(2);

    if (this.imc < 18.5) {
      //remove id 1
      document.getElementById("normal").classList.remove('destaque')
      document.getElementById("sobrepeso").classList.remove('destaque')
      document.getElementById("obesidadeI").classList.remove('destaque')
      document.getElementById("obesidadeII").classList.remove('destaque')
      document.getElementById("obesidadeIII").classList.remove('destaque')
      //remove id 2
      document.getElementById("normal2").classList.remove('destaque')
      document.getElementById("sobrepeso2").classList.remove('destaque')
      document.getElementById("obesidadeI2").classList.remove('destaque')
      document.getElementById("obesidadeII2").classList.remove('destaque')
      document.getElementById("obesidadeIII2").classList.remove('destaque')
      //add id 1
      document.getElementById("baixoPeso").classList.add('destaque')
      //add id 2
      document.getElementById("baixoPeso2").classList.add('destaque')

    }
    else if (this.imc >= 18.5 && this.imc < 25) {
      document.getElementById("baixoPeso").classList.remove('destaque')
      document.getElementById("sobrepeso").classList.remove('destaque')
      document.getElementById("obesidadeI").classList.remove('destaque')
      document.getElementById("obesidadeII").classList.remove('destaque')
      document.getElementById("obesidadeIII").classList.remove('destaque')
      //id 2 remove
      document.getElementById("baixoPeso2").classList.remove('destaque')
      document.getElementById("sobrepeso2").classList.remove('destaque')
      document.getElementById("obesidadeI2").classList.remove('destaque')
      document.getElementById("obesidadeII2").classList.remove('destaque')
      document.getElementById("obesidadeIII2").classList.remove('destaque')
      document.getElementById("normal").classList.add('destaque')
      document.getElementById("normal2").classList.add('destaque')

    }
    else if (this.imc >= 25 && this.imc < 30) {
      document.getElementById("baixoPeso").classList.remove('destaque')
      document.getElementById("normal").classList.remove('destaque')
      document.getElementById("obesidadeI").classList.remove('destaque')
      document.getElementById("obesidadeII").classList.remove('destaque')
      document.getElementById("obesidadeIII").classList.remove('destaque')

      document.getElementById("baixoPeso2").classList.remove('destaque')
      document.getElementById("normal2").classList.remove('destaque')
      document.getElementById("obesidadeI2").classList.remove('destaque')
      document.getElementById("obesidadeII2").classList.remove('destaque')
      document.getElementById("obesidadeIII2").classList.remove('destaque')
      document.getElementById("sobrepeso").classList.add('destaque')
      document.getElementById("sobrepeso2").classList.add('destaque')

    }
    else if (this.imc >= 30 && this.imc < 35) {
      document.getElementById("baixoPeso").classList.remove('destaque')
      document.getElementById("normal").classList.remove('destaque')
      document.getElementById("sobrepeso").classList.remove('destaque')
      document.getElementById("obesidadeII").classList.remove('destaque')
      document.getElementById("obesidadeIII").classList.remove('destaque')

      document.getElementById("baixoPeso2").classList.remove('destaque')
      document.getElementById("normal2").classList.remove('destaque')
      document.getElementById("sobrepeso2").classList.remove('destaque')
      document.getElementById("obesidadeII2").classList.remove('destaque')
      document.getElementById("obesidadeIII2").classList.remove('destaque')
      document.getElementById("obesidadeI").classList.add('destaque')
      document.getElementById("obesidadeI2").classList.add('destaque')
    }
    else if (this.imc >= 35 && this.imc < 40) {
      document.getElementById("baixoPeso").classList.remove('destaque')
      document.getElementById("normal").classList.remove('destaque')
      document.getElementById("sobrepeso").classList.remove('destaque')
      document.getElementById("obesidadeI").classList.remove('destaque')
      document.getElementById("obesidadeIII").classList.remove('destaque')

      document.getElementById("baixoPeso2").classList.remove('destaque')
      document.getElementById("normal2").classList.remove('destaque')
      document.getElementById("sobrepeso2").classList.remove('destaque')
      document.getElementById("obesidadeI2").classList.remove('destaque')
      document.getElementById("obesidadeIII2").classList.remove('destaque')
      document.getElementById("obesidadeII").classList.add('destaque')
      document.getElementById("obesidadeII2").classList.add('destaque')
    }
    else if (this.imc >= 40) {
      document.getElementById("baixoPeso").classList.remove('destaque')
      document.getElementById("normal").classList.remove('destaque')
      document.getElementById("sobrepeso").classList.remove('destaque')
      document.getElementById("obesidadeI").classList.remove('destaque')
      document.getElementById("obesidadeII").classList.remove('destaque')

      document.getElementById("baixoPeso2").classList.remove('destaque')
      document.getElementById("normal2").classList.remove('destaque')
      document.getElementById("sobrepeso2").classList.remove('destaque')
      document.getElementById("obesidadeI2").classList.remove('destaque')
      document.getElementById("obesidadeII2").classList.remove('destaque')
      document.getElementById("obesidadeIII").classList.add('destaque')
      document.getElementById("obesidadeIII2").classList.add('destaque')
    }
    else {
      document.getElementById("baixoPeso").classList.remove('destaque')
      document.getElementById("normal").classList.remove('destaque')
      document.getElementById("sobrepeso").classList.remove('destaque')
      document.getElementById("obesidadeI").classList.remove('destaque')
      document.getElementById("obesidadeII").classList.remove('destaque')
      document.getElementById("obesidadeIII").classList.remove('destaque')

      document.getElementById("baixoPeso2").classList.remove('destaque')
      document.getElementById("normal2").classList.remove('destaque')
      document.getElementById("sobrepeso2").classList.remove('destaque')
      document.getElementById("obesidadeI2").classList.remove('destaque')
      document.getElementById("obesidadeII2").classList.remove('destaque')
      document.getElementById("obesidadeIII2").classList.remove('destaque')
      document.getElementById("resultado").innerHTML = 'DIGITE UM VALOR VÁLIDO!';
    }
  }
    //COMEÇO_CINTURA
  apertar1(){
    this.opcao = 1;
  }
  apertar2(){
    this.opcao = 2;
  }
  apertar3(){
    this.opcao = 3;
  }
  //FINAL_CINTURA
  aparecer = 0;
  execut() {
    this.aparecer++;
    console.log(this.genero);
    this.generoSelect = this.genero;
  }
  execut2() {
    this.aparecer++;
    document.getElementById("radioGenMasc").setAttribute('disabled', 'disabled');
    document.getElementById("radioGenFem").setAttribute('disabled', 'disabled');
  }
  aparecerImc = 0;
  rodar() {
    this.aparecerImc++;
    document.getElementById("radioImc").setAttribute('disabled', 'disabled');
  }
  quest2() {
    this.router.navigate(['tab1/tab2']);
  }
  pontos = 0;
  sumir = 0;

  result = 0;

  calcularRisco() {
    if (this.genero == null || this.cintura == null && this.cinturaHomem == null && this.cinturaMulher == null || this.valorAlimentar == null || this.valorExerc == null || this.valorFamiliar == null || this.imc == null || this.idade == null) {
      this.msg += 1;
    }
    else {
      this.msg -= 1;
      this.sumir++;
      //ALTOS RISCOS
      if (this.idade > 64) {
        this.pontos += 4;
      }
      if (this.imc > 30) {
        this.pontos += 3;
      }
      if (this.cintura > 102 && this.genero == 1) {
        this.pontos += 4;
      }
      if (this.genero == 1) {
        if (this.cinturaHomem == 3) {
          this.pontos += 4;
        }
      }
      if (this.cintura > 88 && this.genero == 2) {
        this.pontos += 4;
      }
      if (this.genero == 2) {
        if (this.cinturaMulher == 6) {
          this.pontos += 4;
        }
      }
      if (this.valorExerc == 5 || this.valorExerc == 4) {
        this.pontos += 2;
      }
      if (this.valorFamiliar == 1) {
        this.pontos += 5;
      }
      if (this.valorAlimentar == 5 || this.valorAlimentar == 4) {
        this.pontos += 2;
      }
      //RISCOS MEDIOS
      if (this.idade >= 55 && this.idade < 64) {
        this.pontos += 3;
      }
      if (this.idade >= 45 && this.idade < 55) {
        this.pontos += 2;
      }
      if (this.imc >= 25 && this.imc <= 30) {
        this.pontos += 1;
      }
      if (this.cintura >= 94 && this.cintura <= 102 && this.genero == 1) {
        this.pontos += 3;
      }
      if (this.genero == 1) {
        if (this.cinturaHomem == 2) {
          this.pontos += 3;
        }
      }
      if (this.cintura >= 80 && this.cintura <= 88 && this.genero == 2) {
        this.pontos += 3;
      }
      if (this.genero == 2) {
        if (this.cinturaMulher == 5) {
          this.pontos += 3;
        }
      }
      if (this.valorExerc == 3) {
        this.pontos += 1;
      }
      if (this.valorFamiliar == 2) {
        this.pontos += 3;
      }
      if (this.valorAlimentar == 3) {
        this.pontos += 1;
      }
      //RISCOS BAIXOS
      if (this.idade < 45) {
        this.pontos += 0;
      }
      if (this.imc < 25) {
        this.pontos += 0;
      }
      if (this.cintura < 94 && this.genero == 1) {
        this.pontos += 0;
      }
      if (this.genero == 1) {
        if (this.cinturaHomem == 1) {
          this.pontos += 0;
        }
      }
      if (this.cintura < 80 && this.genero == 2) {
        this.pontos += 0;
      }
      if (this.genero == 2) {
        if (this.cinturaMulher == 4) {
          this.pontos += 0;
        }
      }
      if (this.valorExerc == 2 || this.valorExerc == 1) {
        this.pontos += 0;
      }
      if (this.valorFamiliar == 3) {
        this.pontos += 0;
      }
      if (this.valorAlimentar == 2 || this.valorAlimentar == 1) {
        this.pontos += 0;
      }
      //RESULTADO
      //alto risco
      if (this.pontos >= 16 && this.genero == 1) {
        this.result = 1;
      }
      if (this.pontos >= 16 && this.genero == 2) {
        this.result = 4;
      }
      //medio risco
      if (this.pontos >= 10 && this.pontos <= 15 && this.genero == 1) {
        this.result = 2;
      }
      if (this.pontos >= 10 && this.pontos <= 15 && this.genero == 2) {
        this.result = 5;
      }
      //baixo risco
      if (this.pontos < 10 && this.genero == 1) {
        this.result = 3;
      }
      if (this.pontos < 10 && this.genero == 2) {
        this.result = 6;
      }

      //resultadoTopicos
      if (this.valorAlimentar == 1 || this.valorAlimentar == 2) {
        this.aparecerTopicoA = 1;
      }
      if (this.valorAlimentar == 3 || this.valorAlimentar == 4 || this.valorAlimentar == 5) {
        this.aparecerTopicoA = 2;
      }
      if (this.valorExerc == 3 || this.valorExerc == 4 || this.valorExerc == 5) {
        this.aparecerTopicoE = 3;
      }
      if (this.valorExerc == 1 || this.valorExerc == 2) {
        this.aparecerTopicoE = 4;
      }
    }
  }

}