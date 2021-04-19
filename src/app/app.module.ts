import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbCardModule, NbInputModule, NbListModule, NbSidebarModule, NbMenuModule, NbToastrModule, NbDialogModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { PokedexComponent } from './components/demo/pokedex/pokedex.component';
import { PokedetailComponent } from './components/demo/pokedetail/pokedetail.component';
import { Pokedetail2Component } from './components/demo/pokedetail2/pokedetail2.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { MarcelInterceptor } from './components/demo/demo2/service/marcel.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    Demo1Component,
    PokedexComponent,
    PokedetailComponent,
    Pokedetail2Component,
    Demo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbListModule,
    FormsModule,
    ReactiveFormsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbToastrModule.forRoot(),
    NbDialogModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass : MarcelInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
