import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import  jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user : User;

  url : string = "http://mysite.com/api/";

  ExempleConso(id : number) {

    // Type entre <> à ne spécifier qu'en cas de contenu retourné par l'api
    this._httpClient.get<Movie[]>(this.url)

    this._httpClient.post(this.url,
      {myProp : "content"}).subscribe(
        //exécution une fois que l'api à répondu (next/error/complete)
      )

    this._httpClient.put(this.url, 
      {myProp : "content"}).subscribe(
        //exécution une fois que l'api à répondu (next/error/complete)
      )

    this._httpClient.delete(this.url + id).subscribe(
      //exécution une fois que l'api à répondu (next/error/complete)
    )
    //un paramètre supplémentaire peut être ajouter (optionnel) pour spécifier des 
    //propiétés de header

    // {myProp : "content"} => peut être remplacé par un objet
  }


  constructor(
    private _httpClient : HttpClient,
    private _toast : NbToastrService
  ) { }

  connect() {   
    //this._httpClient.post<User>("http://localhost:53448/api/Auth/auth", 
    this._httpClient.post<User>("http://stevebstorm.somee.com/api/Auth/auth",       
    {email : "steve.lorent@bstorm.be", password : "test1234"}
      ).subscribe((u : User) => {
        this.user = u;
        localStorage.setItem('token', u.token)
        this.decode(u.token)
        console.log(localStorage.getItem('token'))
      },
        (error) => {this._toast.danger(error)}
      )
  }

  //ne pas oublier : npm install jwt-token
  decode(token : string) {
    let decodedToken = jwt_decode(token)
    localStorage.setItem('role', decodedToken['role'])
    console.log(decodedToken['role'])
    console.log(decodedToken['unique_name'])
  }
  
  getMovie()  {
    // let header = new HttpHeaders ({
    //   'authorization' : 'bearer '+localStorage.getItem('token') 
    // })
     this._httpClient.get<any>("http://stevebstorm.somee.com/api/movie/1"/*, {headers : header}*/)
    .subscribe((d : any) => {
      console.log(d)
    }) 
  }

  getFullMovie() : Observable<Movie> {
    return this._httpClient.get<Movie>("http://stevebstorm.somee.com/api/movie/1")
    .pipe(
      mergeMap
      (
        (m : Movie) => 
        {
          return this._httpClient.get<Comment[]>("http://stevebstorm.somee.com/api/comment/" + m.id)
          .pipe(
            map(
            (x : Comment[]) => 
            {
              m.comments = x; 
              return m; 
            }
            )
          )
      }
      )
    )
  }

}

export interface Movie {
  id : number;
  title : string;
  description : string;
  comments? : Comment[];
}

export interface Comment {
  content : string;
  movieId : number;
  userId : number;
}

export class loginInfo {
  email : string;
  password : string;
}

export interface User {
  id: number;
  email: string; 
  token: string;
  isAdmin: boolean;
}