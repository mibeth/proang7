import { Routes } from "@angular/router";
import { PokeFavoritesComponent  } from "./containers/poke-favorites/poke-favorites.component";

export const routes: Routes =[
    {
        path:'list',
        component: PokeFavoritesComponent
    },
            {
                path:"", redirectTo: 'list', pathMatch:'full'
            }
            

];
