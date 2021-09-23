import { Exercise } from "./../excersise.model";
import { TrainingService } from "./../training.service";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-new-training",
  templateUrl: "./new-training.component.html",
  styleUrls: ["./new-training.component.css"],
})


export class NewTrainingComponent implements OnInit {
  @Output() startOnGoingTrainingEvent = new EventEmitter<void>();
  constructor(private trainingService: TrainingService) {}

  exercises: Exercise[];
  ngOnInit() {
    this.exercises = [...this.trainingService.avialableExercises];
  }

  startOnGoingTraining() {
    this.startOnGoingTrainingEvent.emit();
  }
}
