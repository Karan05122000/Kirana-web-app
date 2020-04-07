import { OnChanges } from '@angular/core';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  InteractionService
} from 'src/app/services/interaction.service';
import {
  TransactionService
} from 'src/app/services/transaction.service';
import { FormGroup, FormControl } from '@angular/forms';
import { formatDate } from '@angular/common';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, OnChanges {

  searchRetail: any;
  searchStatus: any;
  searchDate1: any;
  searchDate: any;
  taskTotal = 10;
  taskRemaining = 0;
  retailers = [
    {
      value: 'retailer-1',
      viewValue: 'Pranav'
    },
    {
      value: 'retailer-2',
      viewValue: 'Vijay'
    },
    {
      value: 'retailer-3',
      viewValue: 'Rebecca'
    },
    {
      value: 'retailer-4',
      viewValue: 'Kirana_vendor'
    }
  ];
  status = [
    {
      value: 'status-1',
      viewValue: 'Delivered'
    },
    {
      value: 'status-2',
      viewValue: 'Ordered'
    },
    {
      value: 'status-3',
      viewValue: 'Packed'
    },
    {
      value: 'status-4',
      viewValue: 'Cancelled'
    },
    {
      value: 'status-5',
      viewValue: 'Dispatched'
    },
    {
      value: 'status-6',
      viewValue: 'Payment'
    }
  ];
  today = Date.now();
  daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  dateNumber = 0;
  model: any = {};
  filters: string[];
  isSidePanelExpanded: boolean;
  allTransaction: any;
  constructor(private interaction: InteractionService, private transaction: TransactionService) {
    this.filters = ['Retailer', 'Status', 'Date'];
    this.isSidePanelExpanded = this.interaction.getExpandedStatus();
  }

  ngOnInit() {
    this.interaction.expandedStatus$.subscribe((res) => {
      this.isSidePanelExpanded = res;
    });
    this.getTransactionHistory();
    console.log(this.searchDate);
  }

  ngOnChanges() {
    console.log(this.searchDate);

  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.searchDate1 = (`${type}:${event.value.toLocaleDateString()}`);
    this.searchDate = this.searchDate1.slice(6, 16);
  }

  getTransactionHistory() {
    this.transaction.getAllOrders().subscribe((res) => {
      this.allTransaction = JSON.parse(JSON.stringify(res.body));
    });
  }
  setStatusColor(status: any) {
    return status;
  }

}
