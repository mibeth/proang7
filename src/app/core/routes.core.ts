import { Routes } from "@angular/router";
import { MainContentComponent } from "./containers/main-content/main-content.component";
import { DetailBookComponent } from "./containers/detail-book/detail-book.component";
import { CoreComponent } from "./containers/core/core.component";

export const routes: Routes =[
    {
        path:'main',
        component:CoreComponent
    },
    {
        path:'detail/:id',
        component: DetailBookComponent
    },
    {
        path:"", redirectTo: 'main', pathMatch:'full'
    },
    {
        path:"**", redirectTo: 'main', pathMatch:'full'
    }

];