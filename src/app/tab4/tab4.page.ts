import { Component, OnInit } from '@angular/core';

import { alimentos } from '../../assets/listaAlimentos';

import _ from "lodash";

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  comidas: Array<{nome: string, IG: number, carboidrato: string}>;
  allComidas: any;
  queryText: string;

  constructor () {
    this.queryText = "";
    this.comidas = alimentos;
    this.allComidas = this.comidas;
  }
  filterComidas(com:any) {

    let val = com.target.value;
    if(val && val.trim() != ""){
      this.comidas = _.values(this.allComidas);
      this.comidas = this.comidas.filter((comida) => {
        return (comida.nome.toLowerCase().indexOf(val.toLowerCase()) > -1)
      })
    } else {
      this.comidas = this.allComidas;
    }

  }
}
