import { NotificationsService } from './../../services/notifications.service';
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
  constructor(private notificationService: NotificationService, private notificationsService: NotificationsService) { }
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
  formattedDate = this.currentDatetime.getDate() + '/' + (this.currentDatetime.getMonth() + 1) + '/' + this.currentDatetime.getFullYear();
  newOrd: any;
  cancelOrd: any;
  criticalOrd: any;

  newOrderFilter: any;
  criticalOrderFilter: any;
  cancelOrderFilter: any;
  ngOnInit() {
    this.newOrderStatus = localStorage.getItem('newOrder');

    this.cancelOrderStatus = localStorage.getItem('cancelOrder');
    this.criticalOrderStatus = localStorage.getItem('criticalOrder');

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

    this.newOrder();
    this.cancelOrder();
    this.criticalOrder();
  }

  newOrder() {
    this.notificationsService.getAllNewNotifications()
      .subscribe( data => {
        this.newOrderNotification = data;
        this.newOrd = {records: this.newOrderNotification};
        this.newOrderFilter = this.newOrd.records.filter( (i: { OrderDate: string; }) => this.formattedDate.includes(i.OrderDate));
      });
  }

  criticalOrder() {
    this.notificationsService.getAllCriticalNotifications()
      .subscribe( data => {
        this.criticalOrderNotification = data;
        this.criticalOrd = {records: this.criticalOrderNotification};
        this.criticalOrderFilter = this.criticalOrd.records.filter((i: { OrderDate: string; }) => this.formattedDate.includes(i.OrderDate));
      });
  }

  cancelOrder() {
    this.notificationsService.getAllCancelledNotifications()
      .subscribe( data => {
        this.cancelledOrderNotification = data;
        this.cancelOrd = {records: this.cancelledOrderNotification};
        this.cancelOrderFilter = this.criticalOrd.records.filter((i: { OrderDate: string; }) => this.formattedDate.includes(i.OrderDate));
      });
  }
}
