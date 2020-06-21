import { UserDTO } from './../models/dto/user.dto';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuthenticated: boolean = false 

  constructor(private router: Router) { }

  login(user: UserDTO) {
    if(user.username === 'admin' && user.password === 'admin' ) {
      this.userAuthenticated = true

      // se autenticado redireciona para a página escolhida nas configurações
      // modo chegada é o padrão
      this.router.navigate(['/chegada'])
    } else {
      this.userAuthenticated = false
      alert('Falha na autenticação')
      // TODO: mostrar snack de bad authentication
    }
  }

  userIsAuthenticated() {
    return this.userAuthenticated
  }
}

