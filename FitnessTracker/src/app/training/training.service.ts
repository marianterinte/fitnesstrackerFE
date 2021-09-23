import { Exercise } from "./excersise.model";
export class TrainingService {
  avialableExercises: Exercise[] = [
    { id: "crunces", name: "Crunces", duration: 30, calories: 8 },
    { id: "touch-toes", name: "Touch Toes", duration: 20, calories: 2 },
    { id: "side-lunges", name: "Side-Lunges", duration: 50, calories: 18 },
    { id: "burpees", name: "Burpees", duration: 60, calories: 20 },
  ];
}
