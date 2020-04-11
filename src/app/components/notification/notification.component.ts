import { NotificationService } from './notification.service';
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
              @Inject(MAT_DIALOG_DATA) public data: any, private notificationService: NotificationService) { }

  newOrdersChange(newNotificationEvent) {
    console.log(newNotificationEvent.checked.toString());
    this.notificationService.sendNewOrder(newNotificationEvent.checked.toString());

  }
  CriticalStatusChange(criticalNotificationEvent) {
    console.log(criticalNotificationEvent.checked.toString());
    this.notificationService.sendCriticalOrder(criticalNotificationEvent.checked.toString());
  }
  CancelledStatusChange(cancelledlNotificationEvent) {
    console.log(cancelledlNotificationEvent.checked.toString());
    this.notificationService.sendCancelOrder(cancelledlNotificationEvent.checked.toString());
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
