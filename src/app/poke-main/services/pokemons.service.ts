import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

import { catchError, map, tap } from 'rxjs/operators';
import { MessagesService } from 'src/app/alerts/services/messages.service';
import { IPokeList } from '../models/interfaces/pokeList';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PokemonsService {
  private pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/'; // URL to web api
  private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/id'; // URL to web api

  favsRef: AngularFireList<any>;
  user: firebase.User;

  constructor(private http: HttpClient,private alertService: MessagesService ,private authFire: AngularFireAuth, private rbd: AngularFireDatabase, private router: Router) {
    authFire.authState.subscribe(
      user => {
        if(user){
          this.user = user;
          this.favsRef = rbd.list(`favorities/${this.user.uid}`);
        }
      }
    );
   }

   getPokemons(): Observable<any[]>{
    return this.http.get<any[]>(this.pokemonsUrl)
    .pipe(
     tap(p => console.log(`Obtiene los pokemons`)),
     catchError(this.handleError('getPokemons', []))
    );
  }

  getPokemonsII(): Observable<IPokeList>{
    return this.http.get<IPokeList>(this.pokemonsUrl)
    .pipe(
      tap(p => console.log(`Obtiene los pokemons`))
    );
  }

  getPokemonUrl(url: string): Observable<any> {        
    return this.http.get<any>(url)
    .pipe(      
      tap(_ => console.log(`obtiene pokemon name=${name}`)),      
      catchError(this.handleError<any>(`getPokemon name=${name}`))    
      );
  }
 
  getPokemon(name: string): Observable<any> {    
   const url = `${this.pokemonUrl}=${name}`;    
   return this.http.get<any>(url)
   .pipe(      
     tap(_ => console.log(`obtiene pokemon name=${name}`)),      
     catchError(this.handleError<any>(`getPokemon name=${name}`))    
     );
 }
  
  /**
  * Handle Http operation that failed
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
 private handleError<T> (operation = 'operation', result?: T) {
   return (error: any): Observable<T> => {
   // TODO: send the error to remote logging infrastructure
   console.error(error); // log to console instead 
   // Let the app keep running by returning an empty result.
   return of(result as T);
   };
  }

   addFavorite(book : any){
    const promise = this.favsRef.push(book);
    promise.then(
      _ => {
        this.alertService.message({msg: "Libro agregado a favoritos", type: 'sucess'});
      }
    );

   }
}
