import { ConfigService } from './../../services/config.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  choose: string = ''
  url: string = 'https://app.quarkclinic.com.br/app/assets/Logo-3348c3daf10c83b9c7332147a5649024.png'

  constructor(private router: Router,
    private configService: ConfigService) { }

  ngOnInit(): void {
    if(this.configService.getImgLogo() !== null && this.configService.getImgLogo() !== 'undefined' && this.configService.getImgLogo() !== undefined) {
      this.url = this.configService.getImgLogo()
    }
  }

  // TODO UM MÉTODO SÓ PRA ISSO  
  chooseNormal(): void {
    // setar escolha
    console.log("Escolheu fila normal")
    this.choose = 'normal'
    this.router.navigate(['chegada/filas/normal'])
    
  }

  choosePrefer(): void {
    // setar escolha
    console.log("Escolheu fila preferencial")
    this.choose = 'prefer'
    this.router.navigate(['chegada/filas/prefer'])
  }

  goConfig(): void {
    // logout
    this.configService.logOut()
    this.router.navigate(['/config'])
  }
}
