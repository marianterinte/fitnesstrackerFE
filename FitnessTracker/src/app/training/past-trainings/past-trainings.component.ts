import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatSort, MatTableDataSource } from "@angular/material";
import { Exercise } from "../excersise.model";
import { TrainingService } from "../training.service";

@Component({
  selector: "app-past-trainings",
  templateUrl: "./past-trainings.component.html",
  styleUrls: ["./past-trainings.component.css"],
})
export class PastTrainingsComponent implements OnInit, AfterViewInit {
  constructor(private trainingService: TrainingService) {}

  dataSource = new MatTableDataSource<Exercise>();
  displayedColumns = ["name", "date", "duration", "calories"];
  @ViewChild(MatSort,{static: true}) sort:MatSort;


  ngOnInit() {
    this.dataSource.data = this.trainingService.getPassedExercises();
  }


  ngAfterViewInit(){
    this.dataSource.sort=this.sort;
  }

  doFilter(filterValue:string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
}
