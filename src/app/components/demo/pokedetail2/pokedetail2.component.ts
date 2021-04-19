import { Component, Input, OnInit } from '@angular/core';
import { PokeserviceService } from 'src/app/services/pokeservice.service';
import { Pokemon } from '../models/pokedex.model';

@Component({
  selector: 'app-pokedetail2',
  templateUrl: './pokedetail2.component.html',
  styleUrls: ['./pokedetail2.component.scss']
})
export class Pokedetail2Component implements OnInit {

  pokemon : Pokemon

  @Input() set url(u : string){
    if(u == null) return;
    this._pokeService.getOne(u).subscribe((data : Pokemon) => this.pokemon = data)
  }

  constructor(
    private _pokeService : PokeserviceService
  ) { }

  ngOnInit(): void {
  }

}
