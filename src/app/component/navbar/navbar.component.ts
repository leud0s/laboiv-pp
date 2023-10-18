import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@angular/fire/auth';

import { UserProfile } from 'src/app/enums/user-profile';

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

  constructor(private router : Router) {
  }
  
  ngOnInit() { }

 
}
