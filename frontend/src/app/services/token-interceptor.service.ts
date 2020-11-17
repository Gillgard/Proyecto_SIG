import { Injectable } from '@angular/core';
import { HttpInterceptor } from "@angular/common/http";
import { AuthService } from "../services/auth.service";

const SECRET_KEY = 'secretkey';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor( private authService: AuthService ) { }

  intercept(req, next){
    const tokenizeReq = req.clone({
      setHeaders: {
        authorization: `${SECRET_KEY} ${this.authService.getToken()}`
      }
    })
    return next.handle(tokenizeReq);
  }
  
}
