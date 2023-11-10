import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {

  @Input()
  pokemon!:string;

  @Input()
  numero:number = 1;
  
  @Input()
  nome: string ="Bulbasaur";
  
    constructor(public http: HttpClient) {
      
    }
  
  pegarImagemPokemon(){
    const numeroformatdo = this.leadingZero(this.numero);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroformatdo}.png`;
  }

  leadingZero(str: string | number, size =3): string{
    let s = String(str);
    while(s.length <(size||2)){
      s = '0' + s ;
    }
    return s;
  }

    mudarPokemon(delta: number) {
    this.numero += delta;
    if (this.numero < 1) {
      this.numero = 151;
    } else if (this.numero > 151) {
      this.numero = 1;
    }
    this.obterNomeDoPokemon();
    }

    pesquisarPorNumero() {
      const inputNumero = document.getElementById('pesquisaNumero') as HTMLInputElement;
      const numero = parseInt(inputNumero.value, 10);
      if (numero >= 1 && numero <= 151) {
        this.numero = numero;
        this.obterNomeDoPokemon();
        inputNumero.value = '';
      } else {
        alert("Por favor, insira um número válido entre 1 e 151.");
        inputNumero.value = '';
      }
    }
    obterNomeDoPokemon() {
      let numero2 = this.numero;
      const url = `https://pokeapi.co/api/v2/pokemon/${numero2}/`;
  
      this.http.get(url).subscribe(
        (data: any) => {
          this.nome = data.name;
          console.log('Nome do Pokémon:', this.nome);
        },
        (error) => {
          console.error('Erro ao obter nome do Pokémon:', error);
        }
      );
    }
}