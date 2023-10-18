import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-users',
  templateUrl: './modal-users.component.html',
  styleUrls: ['./modal-users.component.scss']
})
export class ModalUsersComponent {
  @Input() showUsersModal : boolean = false;
  @Output() hideModalEvent = new EventEmitter<boolean>();
  @Output() userSelectedEvent = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {}

  backClick(value: any){
    if(value.target.classList.contains('modal-background')) this.hideModalEvent.emit(false);
  }

  userSelected(e : any, password : string){
    let email = e.target.textContent;
    this.userSelectedEvent.emit({email: email, password: password})
    this.hideModalEvent.emit(false);
  }
}
