import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { CoreModule} from './core/core.module';
import { RouterModule } from "@angular/router";
import { AuthModule} from "./auth/auth.module";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './data-api/books-dummy-api';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from "@angular/fire/database";

import { AppComponent } from './app.component';
import { environment } from "../environments/environment";
import { routes } from "./routes";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AuthModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes),
    HttpClientInMemoryWebApiModule.forRoot(      
      InMemoryDataService, { 
        dataEncapsulation: false,
        delay:3000 
      }    
      ),
    AngularFireModule.initializeApp(environment.firebaseConfig,'poke-app-fe5a7'),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
