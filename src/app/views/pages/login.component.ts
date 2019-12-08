import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FirebaseService} from "../../services/firebase.service";

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
    username:string;
    password:string;
    invalidLoginMessage:string = "Invalid Login Credentials";
    isLoginInvalid:boolean = false;
    validUser = false;

    users = [
        {
            username: "hani",
            password: "hani"
        },
        {
            username: "taha",
            password: "taha"
        },
        {
            username: "abed",
            password: "abed"
        },
        {
            username: "bassem",
            password: "bassem"
        },
        {
            username: "aalhamali",
            password: "aalhamali"
        }
    ];

  constructor(private _router: Router, private _firebaseService: FirebaseService) { }

    ngOnInit(): void {

        // this._firebaseService.getUsers().subscribe(users => {
        //     console.log(users);
        // });

    }

    handleLogin() {
      for (let user of this.users) {
          if (this.username == user.username && this.password == user.password ) {
              localStorage.setItem("user", this.username);
              this.validUser = true;
              this._router.navigate(['/dashboard']);
          }
      }

       if (this.username == "admin" && this.password == "admin" ) {
          localStorage.setItem("user", this.username);
           this.validUser = true;
          this._router.navigate(['/admin-dashboard']);
      }

      if (!this.validUser) {
          this.isLoginInvalid = true;
      }

    }

    onKeydown(event) {
        if (event.key === "Enter") {
            this.handleLogin();
        }
    }

}
