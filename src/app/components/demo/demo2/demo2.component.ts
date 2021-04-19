import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  constructor(
    private _auth : AuthService
  ) { }

  ngOnInit(): void {
    //localStorage.removeItem('token')
    this._auth.connect()
    this._auth.getFullMovie().subscribe(
      x => console.log(x), //next <c#> try
      (error) => console.log(error), //error <c#> catch 
      () => console.log("Marcel est au top !!!") //complete <c#> finally
      )
    //console.log(localStorage.getItem('token'))
  }

}
