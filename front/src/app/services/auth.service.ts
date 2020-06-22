import { Router } from '@angular/router';
import { ConfigService } from './config.service';
import { UserDTO } from './../models/dto/user.dto';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuthenticated: boolean = false 
  

  constructor(private configService: ConfigService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  // Mockado
  login(user: UserDTO) {
    if(user.username === 'admin' && user.password === 'admin' ) {
      this.userAuthenticated = true

      // pegaria o token do back num fluxo normal
      window.sessionStorage.setItem('user', JSON.stringify(user.username))
      window.sessionStorage.setItem('jwt', JSON.stringify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'))

      // this.configService.redirectDefaultPage()
      this.router.navigate(['/config'])
    } else {
      this.userAuthenticated = false
      
      this.openSnackBar('Falha na autenticação', 'fechar')
      // TODO: mostrar snack de bad authentication
    }
  }

  userIsAuthenticated() {
    return this.userAuthenticated
  }

  // Mockado
  jwtIsValid(): boolean {
    var jwt = window.sessionStorage.getItem('jwt')
    if(jwt != '' && jwt != 'undefined' && jwt != undefined) {
      return true
    }
    return false
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}

