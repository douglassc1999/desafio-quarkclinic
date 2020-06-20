import { QueueService } from './../../services/queue.service';
import { Router } from '@angular/router';
import { Queue } from '../../model/queue.model';
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

  constructor(public dialog: MatDialog,
    private queueService: QueueService,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.queueService.getQueues().subscribe(queues => {
      this.queues = queues
    })
  }

  showOnConsole(name: string): void {
    this.queueService.onMessage(name)
    // pegar o numero da ficha
    const dialogRef = this.dialog.open(ModalReportQueue, {
      width: '500px',
      data: name
    });

    dialogRef.afterClosed().subscribe( () => {
      console.log('Volta ao inicio');
      this.router.navigate(['/chegada'])
    });

  }

  goBack(): void {
    this.location.back();
  }

  goConfig(): void {
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
    @Inject(MAT_DIALOG_DATA) public data: string) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}