import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { login } from '../../interfaces';
import { serviciosServices } from '../../servicios.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  providers: [serviciosServices],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;
  public Login?: login;

  constructor(
    private router: Router,
    private _serviciosServices: serviciosServices
  ) {}
  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(13),
      ]),
    });
  }

  submit() {
    if (this.loginform.valid) {
      let email = this.loginform.get('email')?.value;
      let contra = this.loginform.get('password')?.value;
      this._serviciosServices.getLogin(email).subscribe((data) => {
        this.Login = data;

        if (this.Login) {
          sessionStorage.setItem('objeto', JSON.stringify(this.Login));
          // primer metodo
          // this.router.navigate(['/inicio']);
          // this.router.navigate(['/inicio'], {
          //   queryParams: {
          //     nombre: this.Login.nombre,
          //     apellido: this.Login.apellido,
          //     correo: this.Login.correo,
          //   },
          // });
          // segundo metodo
          this.router.navigate(['/inicio'], {state:{login: this.Login}});
        } else {
          console.error('Login failed'); // Manejo de error opcional
        }
      });
    }
  }
}
