
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

// export class AdminComponent implements OnInit {

//   constructor(private router: Router) { }
//   email: string;
//   password: string;
//   ngOnInit() {}
//   login(): void {
//     if (this.email == 'admin' && this.password == 'test') {
//       this.router.navigate(["products"]);
//     } else {
//       alert("Invalid credentials");
//     }
//   }
// }

export class AdminComponent {
  @Input('email') email: string = '';
  @Input('password') password: string = '';

  constructor(private router: Router) {}

  submit(event) {
    event.preventDefault();
    fetch(`http://localhost:3000/api/auth/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: this.email,
        password: this.password
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(response => response.json())
      .then(json => {
        this.storeSession(json.loggedInUser, json.token)
        this.router.navigate(["products"]);
      })
      .catch(error => console.log(error('error', error)))
  }

  storeSession({ role }, token) {
    sessionStorage.setItem('role', role)
    sessionStorage.setItem('token', token)
  }
}
