import { Component, ViewChild } from '@angular/core';
import { FormProductoComponent } from 'src/app/component/form-producto/form-producto.component';
import { Pais } from 'src/app/models/pais.models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.scss']
})
export class AltaProductoComponent {
  user!: any;
  selectedCountry!: Pais;
  loading = false;
 @ViewChild('form') form!: FormProductoComponent;
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
