import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { CoreModule} from './core/core.module';
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { AuthModule} from "./auth/auth.module";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './data-api/books-dummy-api';

import { AppComponent } from './app.component';

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
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
