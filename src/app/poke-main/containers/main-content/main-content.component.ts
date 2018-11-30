import { Component, OnInit, Input } from '@angular/core';
import {books} from "../../../books";
import { PokemonsService } from "../../services/pokemons.service";
import { MessagesService } from "../../../alerts/services/messages.service";
import { IMessage } from "../../../alerts/models/interfaces/message";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
_dataBook :string;

@Input()
get dataBook():string{
   return this._dataBook;
};

set dataBook (data :string){
  this._dataBook =data;
  this.search(data);
}

books : any[] = [];
  constructor(private PokemonsService : PokemonsService, private msgService:MessagesService) { }

  ngOnInit() {
    //this.books = books.items;
    window.addEventListener('online', this.updateConnection.bind(this));
    window.addEventListener('offline', this.updateConnection.bind(this));
    this.getPokemons();
  }

  updateConnection(event){
    let msg : IMessage;
    if(event.type=='online'){
      msg ={msg:'Se ha establecido conexión de red',type:'success'};
    }else if(event.type =='offline'){
      msg ={msg:'Se ha perdido la conexión de red',type:'error'};
    }
    this.msgService.message(msg);
  }

  getPokemons(): void {
    this.PokemonsService.getPokemons()
    .subscribe(pokemons => this.books = pokemons);
    }
   
  search(query :string){
  let book = this.books.find(
    item =>{
      return item.volumeInfo.title === query;
    }
  );

  this.books =[];
  this.books.push(book);
}
}
