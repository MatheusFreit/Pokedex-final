import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = [];

  constructor(private HttpClient: HttpClient) { 
    this.carregarPokemon();
    
  }

  
  async carregarPokemon () {
    
    const requisicao = await this.HttpClient.get<any>(' https://pokeapi.co/api/v2/pokemon?limit=151').toPromise();
    console.log(requisicao);
    this.pokemons = requisicao.results;
    
  }

  
}
  
