import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeFavoritesComponent } from './containers/poke-favorites/poke-favorites.component';
import { routes} from './routes.favorites';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [PokeFavoritesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FavoritesModule { }
