import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  maxDate;
  birthdate;
  agree;

  constructor() {}

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    this.maxDate = new Date(currentYear - 20, 0, 1);
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
