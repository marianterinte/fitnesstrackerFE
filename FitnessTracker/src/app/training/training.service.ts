import { Subject } from "rxjs/Subject";
import { Exercise } from "./excersise.model";
export class TrainingService {
 private avialableExercises: Exercise[] = [
    { id: "crunces", name: "Crunces", duration: 30, calories: 8 },
    { id: "touch-toes", name: "Touch Toes", duration: 20, calories: 2 },
    { id: "side-lunges", name: "Side-Lunges", duration: 50, calories: 18 },
    { id: "burpees", name: "Burpees", duration: 60, calories: 20 },
  ];

  

  getAvialableExercises(){

    return [...this.avialableExercises];
  }

  runningExercise:Exercise;
  exerciseChanged=new Subject<Exercise>();


  startExercise(exerciseId:string){
    this.runningExercise=this.avialableExercises.find(s=>s.id==exerciseId);
    this.exerciseChanged.next(this.runningExercise);
  }

}
