import { Subject } from "rxjs/Subject";
import { Exercise } from "./excersise.model";
export class TrainingService {
  private avialableExercises: Exercise[] = [
    { id: "crunces", name: "Crunces", duration: 30, calories: 8 },
    { id: "touch-toes", name: "Touch Toes", duration: 20, calories: 2 },
    { id: "side-lunges", name: "Side-Lunges", duration: 50, calories: 18 },
    { id: "burpees", name: "Burpees", duration: 60, calories: 20 },
  ];

  getAvialableExercises() {
    return [...this.avialableExercises];
  }

  exerciseChanged = new Subject<Exercise>();

  private runningExercise: Exercise;
  private exercises: Exercise[] = [];

  startExercise(exerciseId: string) {
    this.runningExercise = this.avialableExercises.find(
      (s) => s.id == exerciseId
    );
    this.exerciseChanged.next(this.runningExercise);
  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }

  completeExercise() {
    this.exercises.push({
      ...this.runningExercise,
      date: new Date(),
      state: "completed",
    });

    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress:number) {
    this.exercises.push({
      ...this.runningExercise,
      date: new Date(),
      state: "cancelled",
      duration:this.runningExercise.duration*progress/100,
      calories:this.runningExercise.duration*progress/100
    });

    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }
}
