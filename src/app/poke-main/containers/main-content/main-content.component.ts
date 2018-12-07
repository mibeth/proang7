import { Component, OnInit } from '@angular/core';
import { PokemonsService } from "../../services/pokemons.service";
import { SearchsPokemonServiceService } from "src/app/poke-main/services/searchs-pokemon-service.service";
import { IPokeList } from '../../models/interfaces/pokeList';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

//books :  IPokeList;
books : any[]= [];

  constructor(private pokemonsService : PokemonsService, private  searchsPokemonServiceService:SearchsPokemonServiceService) { }

  ngOnInit() {
    this.getPokemons();
  }

  addFavorite(book){
    this.pokemonsService.addFavorite(book);
  }

  getPokemons(): void {
    this.pokemonsService.getPokemonsII()
          .subscribe(  
            pokemons => {
           pokemons["results"].forEach(element => {
              this.pokemonsService.getPokemonUrl(element.url)
              .subscribe( p =>{
                this.books.push = p;
              }
              )
            });
          }); 
    this.searchsPokemonServiceService.getMessage()
    .subscribe(
      (name:string) => {
        if (name == null){
          this.pokemonsService.getPokemons()
          .subscribe(pokemons => {
            this.books = pokemons;
          });
        }else{
          this.pokemonsService.getPokemon(name)
          .subscribe(pokemons => {
            console.log(pokemons);
            this.books = pokemons});
        }
      }
    )
    }
}
