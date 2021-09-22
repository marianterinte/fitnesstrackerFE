import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop-training/stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  @Output() exitTrainingEvent = new EventEmitter();
  progress = 0;
  constructor(private dialog: MatDialog) { }
  timer: number;

  ngOnInit() {

    this.startOrResumeTimer();
  }
  
  startOrResumeTimer(){
    this.timer = setInterval(() => {

      this.progress = this.progress + 25;
      if (this.timer >= 100)
        clearInterval(this.timer);
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
    const data = {
      data: { progress: this.progress }
    };
    const dialogRef = this.dialog.open(StopTrainingComponent, data);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);

      if (result) {
        this.exitTrainingEvent.emit();
      } else {
        this.startOrResumeTimer();
      }

    })
  }
}