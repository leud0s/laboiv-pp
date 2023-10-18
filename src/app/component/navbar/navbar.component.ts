import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@angular/fire/auth';
import { UserProfile } from 'src/app/enums/user-profile';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  userProfile = UserProfile;
  @Input() usuario : any | null = null;
  @Input() showButtons : boolean = false;
  @Output() loadingEvent = new EventEmitter<boolean>();
  @Output() userEvent = new EventEmitter<User|null>()

  constructor(private router : Router, private auth: AuthService) {
  }
  
  ngOnInit() { }
  loguot() {
    this.loadingEvent.emit(true);
    setTimeout(() => {
      this.auth
      .logout()
      .then((e) => {
        this.usuario = null;
        this.userEvent.emit(null);
        this.loadingEvent.emit(false);
        this.router.navigate(['/bienvenido']);
        localStorage.clear();
      })
      .catch((err) => {});
    }, 1000);
  }
 
}
