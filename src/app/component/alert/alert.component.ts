import { Component, OnInit, Inject, EventEmitter, Output, Input } from "@angular/core";
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA
} from "@angular/material/snack-bar";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Output() hideAlertEvent = new EventEmitter<boolean>();
  @Input () hidden = false;
  constructor(
    public sbRef: MatSnackBarRef<AlertComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}
  ngOnInit() {}
  onClick(){
    this.hideAlertEvent.emit(false);
  }
}
