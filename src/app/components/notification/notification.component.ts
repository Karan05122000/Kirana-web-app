import { Notifcations } from './../../models/models';
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
  notify: Notifcations;
  constructor(public dialogRef: MatDialogRef<NotificationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  newOrdersChange(newNotificationEvent) {
    console.log(newNotificationEvent.checked.toString());
    this.notify.isNewOrder = newNotificationEvent.checked.toString();
    this.not
  }
  CriticalStatusChange(criticalNotificationEvent) {
    console.log(criticalNotificationEvent.checked.toString());
  }
  CancelledStatusChange(cancelledlNotificationEvent) {
    console.log(cancelledlNotificationEvent.checked.toString());
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
