import { PacientService } from './../../../services/pacient.service';
import { Pacient } from './../../../model/pacient.model';
import { ModalReportPacientComponent } from './../modal-report-pacient/modal-report-pacient.component';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-modal-search-agenda',
  templateUrl: './modal-search-agenda.component.html',
  styleUrls: ['./modal-search-agenda.component.css']
})
export class ModalSearchAgendaComponent implements OnInit {

  value: string = 'CPF'

  screen: string = ''

  paciente: Pacient

  constructor(
    public dialogRef: MatDialogRef<ModalSearchAgendaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public dialog: MatDialog,
    private pacientService: PacientService) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.data = this.screen
    console.log(this.data)
    this.dialogRef.close();
  }

  clickEvent(event): void {
    // TODO APLICAR A MÁSCARA
    var tab = event.toElement.innerText
    if (tab === 'CPF' || tab === 'Data de nascimento' || tab === 'Telefone') {
      this.value = tab 
      this.data = ''
    }
    console.log(this.value)
  }

  screenContent(event): void {
    var tab = event.toElement.innerText
    console.log(tab)
    if (tab !== 'Confirmar' || tab !== 'Cancelar') this.data = this.formatValue(this.data + tab)

  }

  confirmReportPacient(): void {
  
    // this.paciente = {
    //   name: 'Douglas de Souza Carvalho',
    //   birthday: '20/12/1999', 
    //   phone: '87300147',
    //   cpf: '017.277.744-50'
    // }

    const filter: string = this.formatValue(this.data)
    console.log(filter)
    var dialogRef
    this.pacientService.getPacient(filter[0]).subscribe(paciente => {
      this.paciente = paciente
      console.log(this.paciente)

      dialogRef = this.dialog.open(ModalReportPacientComponent, {
        width: '800px',
        data: this.paciente
      });
    })
 
    // dialogRef = this.dialog.open(ModalReportPacientComponent, {
    //   width: '800px',
    //   data: this.paciente
    // });
  }

  cleanScreen(): void {
    this.data = this.data.substring(0, this.data.length - 1)
  }

  formatValue(value: string): string {
    if(this.value === 'CPF') return value.substring(0, 11)
    else if(this.value === 'Data de nascimento') return value.substring(0, 8)
    else if(this.value === 'Telefone') return value.substring(0, 11)
  }
}
