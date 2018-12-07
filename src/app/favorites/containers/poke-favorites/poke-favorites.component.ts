import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-poke-favorites',
  templateUrl: './poke-favorites.component.html',
  styleUrls: ['./poke-favorites.component.css']
})
export class PokeFavoritesComponent implements OnInit {

  books: any = [];

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
    this.favoritesService.listFavorites()
    .subscribe(
      list => {
        this.books = list;
      }
    );
  }

}
