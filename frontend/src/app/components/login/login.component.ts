import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  user = {
    usuario: '',
    password: ''
  };
  alertaLogueo;
  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
    this.verificarSesion();
  }

  LoguearUsuario(){
    this.authService.signIn(this.user).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token);
        this.router.navigate(['dashboard']);
      },
      err => this.alertaLogueo = "Usuario no encontrado o no permitido, verifique sus credenciales."
    )
  }

  public verificarSesion(){
    if (this.authService.loggedIn){
       this.router.navigate(['dashboard']);
     }
   }

}
