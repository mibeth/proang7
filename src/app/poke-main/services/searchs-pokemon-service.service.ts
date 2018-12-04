import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchsPokemonServiceService {

  constructor() { }

  private subject = new Subject<string>();
  
  message(name:string){
    this.subject.next(name);
  }

  getMessage() : Observable<string> {
    return this.subject.asObservable();
  } 
  
}
