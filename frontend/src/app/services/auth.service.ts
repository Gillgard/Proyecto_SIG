import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly URL_API = 'http://localhost:3000/api/usuarios';

  constructor( private http: HttpClient, private router: Router ) { }

  signIn(user) {
    return this.http.post<any>(this.URL_API + '/login', user);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }

}
