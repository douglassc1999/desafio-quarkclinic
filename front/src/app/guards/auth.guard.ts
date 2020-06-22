import { AuthService } from './../services/auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    // se token ainda for válido
    console.log('Entrou no guard')
    if(this.authService.jwtIsValid()) {
      console.log('jwt: ' + this.authService.jwtIsValid())
      return true
    }

    console.log('jwt: ' + this.authService.jwtIsValid())
    this.router.navigate(['/login'])

    return false
  }

  
}
