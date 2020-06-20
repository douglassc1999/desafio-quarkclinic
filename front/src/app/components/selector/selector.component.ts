import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  choose: string = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
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
}
