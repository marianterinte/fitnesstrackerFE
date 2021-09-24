import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Exercise } from '../excersise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css']
})
export class PastTrainingsComponent implements OnInit {

  constructor(private trainingService:TrainingService) { }

dataSource=new MatTableDataSource<Exercise>();
displayedColumns=["name","date","duration","calories"];

  ngOnInit() {
      this.dataSource.data=this.trainingService.getPassedExercises();

  }

}
