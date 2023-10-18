import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertComponent } from 'src/app/component/alert/alert.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;
  loading = false;
  alert: string = '';
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
  })
  constructor(public router: Router,
    private firebaseSvc: AuthService,
    private snackBar: MatSnackBar
    ){}


    getErrorMessageEmail(){
      let message = "";
      if (this.form.controls.email.hasError('required')) {
        message = 'Campo requerido';
      }
      if(this.form.controls.email.hasError('email')){
        message='Email no valido';
      }
    return message;
    }
    getErrorMessagePassword(){
      let message = "Debe tener al menos 6 caracteres";
      if (this.form.controls.password.hasError('required')) {
        message = 'Campo requerido';
      }
      return message;
    }
  submit() {
    if (this.form.valid) {
      this.loading = true;
      const date = new Date();
      const fullDate = date.toLocaleDateString() + '-' + date.toLocaleTimeString();
      this.firebaseSvc.login(this.form.value as User).then(async res =>{
        let user: User={
          uid: res.user.uid,
          name: res.user.displayName,
          email: res.user.email
        }
        this.firebaseSvc.saveLog(res.user.email);
        
        this.router.navigate(['bienvenido'], { queryParams: user });
        

        this.form.reset();
      }, error =>{
        this.loading = false;
        if(error.message === "Firebase: The password is invalid or the user does not have a password. (auth/wrong-password)."){
          this.alert = "Contraseña incorrecta vuelva a intentar";
        }
        if(error.message ==="Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found)."){
          this.alert = "Usuario incorrecto vuelva a intentar";
        }
        let sb = this.snackBar.open(this.alert, 'cerrar', {
          duration: 3000,
        });
        sb.onAction().subscribe(() => {
          sb.dismiss();
        });
      })
    }
  }
 
  autoComplete(){
    this.form.setValue({
      email: 'juan@gmail.com',
      password: '123456'
    });;
  }
  autoAdmin(){
    this.form.setValue({
      email: 'admin@admin.com',
      password: '123456'
    });;
  }
  autoEmpleado(){
    this.form.setValue({
      email: 'empleado@empleado.com',
      password: '123456'
    });;
  }
}