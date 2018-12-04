import { Component, OnInit } from '@angular/core';
import { PokemonsService } from "../../services/pokemons.service";
import { SearchsPokemonServiceService } from "src/app/poke-main/services/searchs-pokemon-service.service";


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {


books : any[] = [];
  constructor(private PokemonsService : PokemonsService, private  searchsPokemonServiceService:SearchsPokemonServiceService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.PokemonsService.getPokemons()
          .subscribe(pokemons => this.books = pokemons); 
    this.searchsPokemonServiceService.getMessage()
    .subscribe(
      (name:string) => {
        if (name == null){
          this.PokemonsService.getPokemons()
          .subscribe(pokemons => this.books = pokemons);
        }else{
          this.PokemonsService.getPokemon(name)
          .subscribe(pokemons => {
            console.log(pokemons);
            this.books = pokemons});
        }
      }
    )
    }
}
