import { NewOrderNotification, CancelledOrderNotification, CriticalOrderNotification } from './../../constants/mockup-data';
import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material';
@Component({
  selector: 'app-notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.scss']
})
export class NotificationsPageComponent implements OnInit {
  constructor() { }
  message = 'Password changed sucessfully';
  errMessage = 'Old Password not valid !!!';
  actionButtonLabel = 'OK';
  snackBar: any;
  panelOpenState = false;
  newOrderNotification = NewOrderNotification;
  cancelledOrderNotification = CancelledOrderNotification;
  criticalOrderNotification = CriticalOrderNotification;
  currentDatetime = new Date();
// tslint:disable-next-line: variable-name
  formattedDate = this.currentDatetime.getDate() + '-' + (this.currentDatetime.getMonth() + 1) + '-' + this.currentDatetime.getFullYear();
  ngOnInit() {
    console.log(this.currentDatetime);
    console.log(this.formattedDate);
  }

}
