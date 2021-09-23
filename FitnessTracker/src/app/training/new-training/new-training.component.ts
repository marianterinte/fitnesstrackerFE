import { Exercise } from "./../excersise.model";
import { TrainingService } from "./../training.service";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-new-training",
  templateUrl: "./new-training.component.html",
  styleUrls: ["./new-training.component.css"],
})

export class NewTrainingComponent implements OnInit {
  @Output() startOnGoingTrainingEvent = new EventEmitter<void>();

  constructor(private trainingService: TrainingService) { }

  exercises: Exercise[];
  newTrainingForm: FormGroup;

  ngOnInit() {
    this.exercises = this.trainingService.getAvialableExercises();
    this.newTrainingForm = new FormGroup({
      exercise: new FormControl("", Validators.required)
    })

    this.newTrainingForm.controls['exercise'].setValue("0", { onlySelf: true });
  }

  startOnGoingTraining() {
    console.log(this.newTrainingForm);

    this.trainingService.startExercise(this.newTrainingForm.value.exercise);
  }

}
