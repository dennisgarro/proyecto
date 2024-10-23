import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { serviciosServices } from '../../servicios.service';
import { FooterComponent } from '../shared/footer/footer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { login } from '../../interfaces';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    NavbarComponent,
    FooterComponent,
  ],
  providers: [serviciosServices],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}
  paramtrosLogin?: any = {};
  ngOnInit(): void {
    //  primera forma
    // this.router.queryParams.subscribe((p) => {
    //   this.paramtrosLogin = {
    //     nombre: p['nombre'],
    //     apellido: p['apellido'],
    //     correo: p['correo'],
    //   };
    // });
    // console.log("primera forma",this.paramtrosLogin);

    // // segunda forma
    this.paramtrosLogin = history.state.login;
    console.log("segunda forma",this.paramtrosLogin);
  }
}
