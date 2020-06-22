import { ConfigService } from './../../services/config.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  hide = true;

  url: any;

  selectHomePage: string // true: chegada 
  // false: agendado

  constructor(private configService: ConfigService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.selectHomePage = this.configService.getHomePage()
  }

  saveConfig() {
    //salvar foto
    if(this.url !== undefined) {
      console.log('entrou lop imagem upload')
      console.log(this.url)
      this.configService.setImgLogo(this.url)  
    } 
    this.configService.setHomePage(this.selectHomePage)
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


  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        console.log(typeof(event.target.result))
        this.url = event.target.result;
      }
    }
  }

}
