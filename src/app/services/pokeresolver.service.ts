import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { NbGlobalLogicalPosition, NbGlobalPositionStrategy, NbToastrService } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pokemon } from '../components/demo/models/pokedex.model';
import { PokeserviceService } from './pokeservice.service';

@Injectable({
  providedIn: 'root'
})
export class PokeresolverService implements Resolve<Pokemon> {

  constructor(
    private _pokeService : PokeserviceService,
    private _toast : NbToastrService
  ) { }

  resolve(route : ActivatedRouteSnapshot) : Observable<Pokemon> {
    return this._pokeService.getOne(route.params['url'])
    .pipe(catchError(e => {
      this._toast.primary(e.message, "Message d'erreur", {duration : 4000, position : NbGlobalLogicalPosition.BOTTOM_START});
      return of(e)
    }))
  }
}
