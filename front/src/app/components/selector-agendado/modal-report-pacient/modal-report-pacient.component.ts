import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Pacient } from '../../../models/pacient.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-report-pacient',
  templateUrl: './modal-report-pacient.component.html',
  styleUrls: ['./modal-report-pacient.component.css']
})
export class ModalReportPacientComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalReportPacientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pacient,
    private router: Router,
    private datePipe: DatePipe) { 
      data.date = datePipe.transform(data.date,'dd/MM/yyyy HH:mm:ss');
      console.log(data);
    }

  ngOnInit(): void {
  }

}
