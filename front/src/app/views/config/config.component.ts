import { ConfigService } from './../../services/config.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  hide = true;

  selectHomePage: string // true: chegada 
                          // false: agendado

  constructor(private configService: ConfigService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.selectHomePage = this.configService.getHomePage()
  }

  saveConfig() {
    this.configService.setHomePage(this.selectHomePage ) 
    this.openSnackBar('Salvo com sucesso', 'fechar')
  }

  home() {
    console.log('home')
    this.configService.redirectDefaultPage()
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
