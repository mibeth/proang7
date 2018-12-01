import { Component, OnInit } from '@angular/core';
import { PokemonsService } from "../../services/pokemons.service";


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {


books : any[] = [];
  constructor(private PokemonsService : PokemonsService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.PokemonsService.getPokemons()
    .subscribe(pokemons => this.books = pokemons);
    }
}
