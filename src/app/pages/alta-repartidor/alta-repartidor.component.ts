import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pais } from 'src/app/models/pais.models';
import { AuthService } from 'src/app/services/auth.service';
import { FormRepartidorComponent } from 'src/app/component/form-repartidor/form-repartidor.component';


@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.scss']
})
export class AltaRepartidorComponent {
  user!: any;
  selectedCountry!: Pais;
  loading = false;
 @ViewChild('form') form!: FormRepartidorComponent;
  constructor(private authService: AuthService){
  }
  ngOnInit(): void {
    this.cargarUsuario();
  }
  selectCountry(e: Pais) {
    this.form.setCountry(e);
    this.selectedCountry = e;
  }

  cargarUsuario() {
    this.user  = this.authService.getCurrentUser();
  }
}
