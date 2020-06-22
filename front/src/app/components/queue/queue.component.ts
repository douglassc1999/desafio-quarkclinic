import { ConfigService } from './../../services/config.service';
import { Position } from '../../models/dto/position.dto';
import { PacientService } from './../../services/pacient.service';
import { QueueService } from './../../services/queue.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Queue } from '../../models/queue.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Location } from '@angular/common';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

  queues: Queue[]
  url: string = 'https://app.quarkclinic.com.br/app/assets/Logo-3348c3daf10c83b9c7332147a5649024.png'

  constructor(public dialog: MatDialog,
    private queueService: QueueService,
    private pacientService: PacientService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private configService: ConfigService) { }

  ngOnInit(): void {
    if (this.configService.getImgLogo() !== null && this.configService.getImgLogo() !== 'undefined' && this.configService.getImgLogo() !== undefined) {
      this.url = this.configService.getImgLogo()
    }

    this.queueService.getQueues().subscribe(queues => {
      this.queues = queues
    })

  }

  addPacientOnQueue(prefix: string): void {
    var dialogRef
    var preferFilter = this.route.snapshot.paramMap.get('choose')
    console.log(preferFilter)
    this.pacientService.addPacienteInQueue(prefix, preferFilter).subscribe(position => {
      console.log(position)

      dialogRef = this.dialog.open(ModalReportQueue, {
        width: '500px',
        data: position
      });

      dialogRef.afterClosed().subscribe(() => {
        console.log('Volta ao inicio');
        this.router.navigate(['/chegada'])
      });
    })
  }

  goBack(): void {
    this.location.back();
  }

  goConfig(): void {
    // logout
    this.configService.logOut()
    this.router.navigate(['/config'])
  }
}

@Component({
  selector: 'modal-report-queue',
  templateUrl: 'modal-report-queue.html',
})
export class ModalReportQueue {

  constructor(
    public dialogRef: MatDialogRef<ModalReportQueue>,
    @Inject(MAT_DIALOG_DATA) public data: Position) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}