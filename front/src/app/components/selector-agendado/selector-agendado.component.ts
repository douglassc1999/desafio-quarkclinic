import { NaoAgendadoComponent } from './nao-agendado/nao-agendado.component';
import { ConfigService } from './../../services/config.service';
import { QueueService } from './../../services/queue.service';
import { ModalSearchAgendaComponent } from './modal-search-agenda/modal-search-agenda.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selector-agendado',
  templateUrl: './selector-agendado.component.html',
  styleUrls: ['./selector-agendado.component.css']
})
export class SelectorAgendadoComponent implements OnInit {

  url: string = 'https://app.quarkclinic.com.br/app/assets/Logo-3348c3daf10c83b9c7332147a5649024.png'

  constructor(public dialog: MatDialog,
    private queueService: QueueService,
    private configService: ConfigService,
    private router: Router) { }

  ngOnInit(): void {
    if(this.configService.getImgLogo() !== null && this.configService.getImgLogo() !== 'undefined' && this.configService.getImgLogo() !== undefined) {
      this.url = this.configService.getImgLogo()
    }
  }

  showModalSearch(name: string): void {
    this.queueService.onMessage(name)
    // pegar o numero da ficha
    const dialogRef = this.dialog.open(ModalSearchAgendaComponent, {
      width: '800px',
      data: ''
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    });
  }

  showModalNoSchedule(name: string): void {
    this.queueService.onMessage(name)
    // pegar o numero da ficha
    const dialogRef = this.dialog.open(NaoAgendadoComponent, {
      width: '800px',
      data: '',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    });
  }

  goConfig(): void {
    // logout
    this.configService.logOut()
    this.router.navigate(['/config'])
  }

}