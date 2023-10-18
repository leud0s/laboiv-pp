import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() text : string = 'Error';
  @Output() hideAlertEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {    
  }

  onClick(){
    this.hideAlertEvent.emit(false);
  }
}
