import { NotificationService } from './../../components/notification/notification.service';
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
  constructor(private notificationService: NotificationService) { }
  message = 'Password changed sucessfully';
  errMessage = 'Old Password not valid !!!';
  actionButtonLabel = 'OK';
  snackBar: any;
  panelOpenState = false;
  newOrderStatus: any;
  criticalOrderStatus: any;
  cancelOrderStatus: any;
  newOrderNotification = NewOrderNotification;
  cancelledOrderNotification = CancelledOrderNotification;
  criticalOrderNotification = CriticalOrderNotification;
  currentDatetime = new Date();
// tslint:disable-next-line: variable-name
  formattedDate = this.currentDatetime.getDate() + '/' + (this.currentDatetime.getMonth() + 1) + '/' + this.currentDatetime.getFullYear();
  // tslint:disable-next-line: align
  temp = {records: this.newOrderNotification};
  // tslint:disable-next-line: member-ordering
  // tslint:disable-next-line: align
  // tslint:disable-next-line: member-ordering
  newOrderFilter = this.temp.records.filter( i => this.formattedDate.includes(i.OrderDate));
  ngOnInit() {
    console.log(this.formattedDate);
    console.log(this.newOrderFilter);
    this.notificationService.newOrderSetting$
      .subscribe( msg => {
        this.newOrderStatus = msg;
      });

    this.notificationService.criticalOrderSetting$
    .subscribe( msg => {
      this.criticalOrderStatus = msg;
    });

    this.notificationService.cancelOrderSetting$
    .subscribe( msg => {
      this.cancelOrderStatus = msg;
    });
  }
}
