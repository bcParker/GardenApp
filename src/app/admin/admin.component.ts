
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  constructor(private router: Router) { }
  email: string;
  password: string;
  ngOnInit() {}
  login(): void {
    if (this.email == 'admin' && this.password == 'test') {
      this.router.navigate(["products"]);
    } else {
      alert("Invalid credentials");
    }
  }
}

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch(`http://localhost:4200/user/login`, {
//       method: 'POST',
//       body: JSON.stringify({ email: email, password: password }),
//       headers: new Headers({
//         'Content-Type': 'application/json'
//       })
//     }).then(
//       (response) => response.json()
//     ).then((data) => {
//       localStorage.setItem('token', user.token);
//     })
//       .catch(err => console.log(err))
//   }
// }



// token: string;

// constructor(private router: Router) { }
// ngOnInit() {
//   if (sessionStorage.getItem('token')) {
//     this.token=sessionStorage.getItem('token');
//   }
// }

// login() {
//   console.log(this.adminService.AdminComponent(this.user))
//   .subscribe((data:any) => {
//     if data.error === false) {
//       sessionStorage.setItem('token', data.token);
//       this.token=data.token
//     }
//   })
// }