import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { PokeserviceService } from 'src/app/services/pokeservice.service';
import { Pokedex } from '../models/pokedex.model';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokedex : Pokedex
  errorMessage : string;
  toUrl : string;

  constructor(
    private _toast : NbToastrService,
    private _pokeService : PokeserviceService
  ) { }

  ngOnInit(): void {
    this.loadItems("https://pokeapi.co/api/v2/pokemon/")
  }

  loadItems(url : string) {
    this._pokeService.getAll(url).subscribe(
      (dataFromService : Pokedex) =>  {
        this.pokedex = dataFromService
        this._toast.success("Liste chargée avec succès", "", {duration : 5000})
      },
      (error) => this.errorMessage = error.message
    )
  }

  clickPrevious() {
    this.loadItems(this.pokedex.previous);
  }
  clickNext() {
    this.loadItems(this.pokedex.next);
  }

  onClick(url : string) {
    this.toUrl = url;
  }

}
