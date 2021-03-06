import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {

  constructor(private router: Router) {}

  username: string;
  password: string;

  login(): void {
    if (this.username == "admin" && this.password == "admin") {
      this.router.navigate([""]);
    } else {
      alert("Invalid credentials");
    }
  }
}
