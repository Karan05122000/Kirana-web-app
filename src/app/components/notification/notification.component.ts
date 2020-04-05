import { Component, OnInit, Inject } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent  {
  color: ThemePalette = 'accent';
  checkedNewOrder = false;
  checkedCancelledStatus = false;
  checkedCriticalStatus = false;
  disabled = false;

  constructor(public dialogRef: MatDialogRef<NotificationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  newOrdersChange(event) {
    console.log(event.checked.toString());
  }
  CriticalStatusChange(event) {
    console.log(event.checked.toString());
  }
  CancelledStatusChange(event) {
    console.log(event.checked.toString());
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
