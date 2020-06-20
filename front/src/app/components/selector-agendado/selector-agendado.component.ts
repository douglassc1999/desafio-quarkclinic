import { QueueService } from './../../services/queue.service';
import { ModalSearchAgendaComponent } from './modal-search-agenda/modal-search-agenda.component';

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-selector-agendado',
  templateUrl: './selector-agendado.component.html',
  styleUrls: ['./selector-agendado.component.css']
})
export class SelectorAgendadoComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private queueService: QueueService) { }

  ngOnInit(): void {
  }

  showOnConsole(name: string): void {
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

}