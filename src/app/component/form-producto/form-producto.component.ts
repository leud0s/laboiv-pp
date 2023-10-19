import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pais } from 'src/app/models/pais.models';
import { ProductoService } from 'src/app/services/producto.service';
import { FormValidator } from 'src/app/validators/form-validators';


@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.scss']
})
export class FormProductoComponent {
  formProducto: FormGroup;
  @Input() selectedCountry!: Pais;
  @Output() loadingEvent = new EventEmitter<boolean>();

  constructor(private productoService: ProductoService) {
    this.formProducto = new FormGroup({
      codigo: new FormControl('0', {
        validators: [FormValidator.onlyNumbers, Validators.maxLength(8)],
        updateOn: 'change',
      }),
      descripcion: new FormControl(null, {
        validators: [FormValidator.onlyLetters],
        updateOn: 'change',
      }),
      precio: new FormControl(18, {
        validators: [FormValidator.onlyNumbers, Validators.min(18)],
        updateOn: 'change',
      }),
      stock: new FormControl(1, {
        validators: [FormValidator.onlyNumbers, Validators.min(0)],
        updateOn: 'change',
      }),
      pais: new FormControl(),
      comestible: new FormControl(),
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    this.validateEmptyInputs();
    if (this.formProducto.invalid) return;

    const producto = {
      codigo: this.codigo.value,
      descripcion: this.descripcion.value,
      precio: Number(this.precio.value),
      stock: Number(this.stock.value),
      comestible: this.comestible.value,
      pais_origen: {
        nombre: this.selectedCountry.nombre,
        img: this.selectedCountry.img,
        idioma: "español"
      },
    };

    this.loadingEvent.emit(true);
    this.productoService.addProducto(producto).then((res) => {
      this.loadingEvent.emit(false);
      this.formProducto.reset();
    });
  }

  setCountry(pais: Pais) {
    this.pais.setValue(pais.nombre);
  }

  validateEmptyInputs() {
    const arrayControls = Object.values(this.formProducto.controls).map(
      (obj) => obj
    );
    arrayControls.forEach((control) => {
      if (!control.value) {
        control.setErrors({ invalid: true });
      }
    });
  }

  get codigo() {
    return this.formProducto.controls['codigo'];
  }
  get descripcion() {
    return this.formProducto.controls['descripcion'];
  }
  get precio() {
    return this.formProducto.controls['precio'];
  }
  get stock() {
    return this.formProducto.controls['stock'];
  }
  get comestible() {
    return this.formProducto.controls['comestible'];
  }
  get pais() {
    return this.formProducto.controls['pais'];
  }
}

