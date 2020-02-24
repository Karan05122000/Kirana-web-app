// import { Component, OnInit } from '@angular/core';
// import { InteractionService } from 'src/app/services/interaction.service';

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

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  searchRetail;
  taskTotal = 10;
  taskRemaining = 0;
  foods = [
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
    }
  ];
  today = Date.now();
  daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  dateNumber = 0;

  filters: string[];
  isSidePanelExpanded: boolean;
  // tslint:disable-next-line: max-line-length
  allTransactions: {
    Consumer: {
      Name: string; 
      Area: string;
    }; 
    Retailer: {
      Name: string; 
      Area: string;
    };
    OrderDetails: {
      OrderDate: string; 
      ItemsPurchased: {
        ItemName: string; 
        ItemPrice: number; 
        Quantity: number;
      } []; 
      TotalPrice: number;
    };
    Status: string;
  } [];

  constructor(private interaction: InteractionService, private transaction: TransactionService) {
    this.filters = ['Retailer', 'Status', 'Date'];
    this.isSidePanelExpanded = this.interaction.getExpandedStatus();
  }

  ngOnInit() {
    this.interaction.expandedStatus$.subscribe((res) => {
      this.isSidePanelExpanded = res;
    });
    this.getTransactionHistory();
  }

  getTransactionHistory() {
    this.allTransactions = this.transaction.getAllTransactions();
    this.transaction.getAllOrders().subscribe((res) => {
    });
  }

  setStatusColor(status) {
    return status;
  }

}
