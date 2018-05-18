import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    if (form.value.email === 'admin@admin.com' && form.value.password === 'admin123') {
      localStorage.setItem('email', form.value.email);
      this.router.navigate(['/user']);
    } else {
      alert('Ingrese bien las credenciales');
    }
  }
}
