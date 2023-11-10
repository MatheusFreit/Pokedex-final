import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonService } from './services/pokemon.service';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokemonCardComponent,
    PokemonListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
