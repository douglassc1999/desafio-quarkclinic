import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  homePage: string = 'chegada' //chegada

  constructor(private router: Router) {
    window.sessionStorage.setItem('homePage', 'chegada')
  }

  

  redirectDefaultPage() {
    this.router.navigate([`/${this.getHomePage()}`])

  }

  getHomePage(): string {
    return window.sessionStorage.getItem('homePage')
  }

  setHomePage(homePage: string) {
    window.sessionStorage.setItem('homePage', homePage)
  }
}
