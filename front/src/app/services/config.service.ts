import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  homePage: string = 'chegada' //chegada
  logoPage: string = 'https://app.quarkclinic.com.br/app/assets/Logo-3348c3daf10c83b9c7332147a5649024.png' //chegada

  constructor(private router: Router) {
    window.sessionStorage.setItem('homePage', 'chegada')
  }

  redirectDefaultPage() {
    console.log('Chamou redirect')
    this.router.navigate([`/${this.getHomePage()}`])

  }

  getHomePage(): string {
    return window.sessionStorage.getItem('homePage')
  }

  setHomePage(homePage: string) {
    window.sessionStorage.setItem('homePage', homePage)
  }

  setImgLogo(img: string) {
    window.sessionStorage.setItem('logoPage', img)
  }

  getImgLogo(): string {
    return window.sessionStorage.getItem('logoPage')
  }

  logOut() {
    window.sessionStorage.setItem('jwt', '')
  }
}
