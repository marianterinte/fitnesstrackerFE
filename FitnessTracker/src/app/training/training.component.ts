import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {

  exerciseChangedSubscription: Subscription;
  ongoingTraining: false|true;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {

    this.exerciseChangedSubscription = this.trainingService.exerciseChanged.subscribe(ex => {
      if (ex)
        this.ongoingTraining = true;
      else
        this.ongoingTraining = false;
    })
  }

  ngOnDestroy(){
    this.exerciseChangedSubscription.unsubscribe();
  }
}
