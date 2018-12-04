import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { SearchsPokemonServiceService } from "src/app/poke-main/services/searchs-pokemon-service.service";

@Component({
  selector: 'app-btn-search',
  templateUrl: './btn-search.component.html',
  styleUrls: ['./btn-search.component.css']
})
export class BtnSearchComponent implements OnInit {

  @Output() search = new EventEmitter<string>();///evento que va disparar un string

  constructor(private searchsPokemonServiceService:SearchsPokemonServiceService) { }

  ngOnInit() {
  }

  searchBooks (data :string){
    //this.search.emit(data);
    this.searchsPokemonServiceService.message(data);
  }

}
