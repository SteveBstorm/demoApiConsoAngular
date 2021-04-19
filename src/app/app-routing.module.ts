import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { PokedetailComponent } from './components/demo/pokedetail/pokedetail.component';
import { PokedexComponent } from './components/demo/pokedex/pokedex.component';
import { HomeComponent } from './components/home/home.component';
import { PokeresolverService } from './services/pokeresolver.service';

const routes: Routes = [
  { path : 'home', component : HomeComponent},
  { path : 'demo/demo1', component : Demo1Component},
  { path : 'demo/pokedex', component : PokedexComponent},
  { path : 'demo/detail/:url', resolve : {pokemon : PokeresolverService}, component : PokedetailComponent},
  { path : 'demo/demo2', component : Demo2Component},

  { path : '', redirectTo : 'home', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
