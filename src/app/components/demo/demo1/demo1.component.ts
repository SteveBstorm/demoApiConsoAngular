import { Component, OnInit } from '@angular/core';
import { from, interval, of, timer } from 'rxjs';
import { catchError, delay, map, mergeMap, tap } from 'rxjs/operators'

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

  liste : any[]
  nbr : number = 0;
  constructor() { }

  ngOnInit(): void {
    const myBadPromise = () =>
    new Promise((resolve, reject) => reject("Je t'aime pas toi !!!"));
    //emit single value after 1 second
    const source = timer(1000);
    //catch rejected promise, returning observable containing error message
    const example = source.pipe(
      mergeMap(_ =>
        from(myBadPromise()).pipe(catchError(error => of(`Bad Promise: ${error}`)))
      )
);
//output: 'Bad Promise: Rejected'
const subscribe = example.subscribe(val => console.log(val));

    const listeObs = of([
      {id : 1, lastname : "Lorent", firstname : "Steve", role : "Emp"},
      {id : 2, lastname : "Morre", firstname : "Thierry",  role : "Boss"},
      {id : 3, lastname : "Person", firstname : "Michael",  role : "Boss"},
      {id : 4, lastname : "Ly", firstname : "Khun",  role : "Emp"},
    ])

    listeObs.pipe(
      tap((x : any[])=> {console.log(x); this.liste = x;}),
      delay(4000),
      map((x : any[]) => x.filter(x => x.role == "Emp")),
      tap((x : any[]) => this.liste = x),
      delay(3000),
      map((x : any[]) => x.filter(x => x.firstname == "Steve"))
    ).subscribe(
      (x : any[]) => this.liste = x, //try
      () => console.log("en cas d'erreur"), //catch
      () => console.log("c'est fini") //finally
    )

    const chron = interval(1000)
    chron.subscribe(() => this.nbr++)
  }

}
