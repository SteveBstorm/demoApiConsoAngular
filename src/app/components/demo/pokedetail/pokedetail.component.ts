import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../models/pokedex.model';

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.scss']
})
export class PokedetailComponent implements OnInit {

  pokemon : Pokemon;
  lastPage : string;

  constructor(
    private _activatedRoute : ActivatedRoute,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.pokemon = this._activatedRoute.snapshot.data['pokemon']

  }

}
