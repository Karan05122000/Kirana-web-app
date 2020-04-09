import { Transaction } from './../../models/models';
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
import { formatDate, DatePipe } from '@angular/common';
import { MatDatepickerInputEvent } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, OnChanges {

  notEmptyPost = true;
  notscrolly = true;
  searchRetail: any;
  searchStatus: any;
  searchDate1: any;
  searchDate: any;
  taskTotal = 10;
  taskRemaining = 0;
  retailers = [];
  status = ['Delivered', 'Ordered', 'Packed', 'Cancelled', 'Dispatched', 'Payment'];
  today = Date.now();
  model: any = {};
  filters: string[];
  isSidePanelExpanded: boolean;
  allTransaction: Transaction[];
  dup: Transaction[];
  retdup: string[] = [];
  temp = '';
  myControl = new FormControl();
  date: Date[] = [];
  orderDate: string[] = [];
  filteredOptions: Observable<string[]>;
  private _filter(value: string): string[] {
    const retailerFilterValue = value.toLocaleLowerCase();
    return this.retailers.filter(retailer => retailer.toLocaleLowerCase().includes(retailerFilterValue));
  }
  // tslint:disable-next-line: member-ordering
  statusControl = new FormControl();
  // tslint:disable-next-line: member-ordering
  statusFilteredOptions: Observable<string[]>;
  private _statusFilter(value: string): string[] {
    const statusFilterValue = value.toLowerCase();
    return this.status.filter(state => state.toLowerCase().includes(statusFilterValue));
  }
  constructor(private interaction: InteractionService,
              private transaction: TransactionService, private router: Router, private spinner: NgxSpinnerService) {
    this.filters = ['Retailer', 'Status', 'Date'];
    this.isSidePanelExpanded = this.interaction.getExpandedStatus();
  }

  ngOnInit() {
    this.statusFilteredOptions = this.statusControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._statusFilter(value))
      );
    this.interaction.expandedStatus$.subscribe((res) => {
      this.isSidePanelExpanded = res;
    });
    this.getTransactionHistory();
    // console.log(this.searchDate);
  }

  ngOnChanges() {
    // console.log(this.searchDate);

  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.searchDate1 = (`${type}:${event.value.toLocaleDateString()}`);
    this.searchDate = this.searchDate1.slice(6, 16);
    console.log(typeof(this.searchDate));
  }
  getTransactionHistory() {
    this.transaction.getAllOrders().subscribe((res) => {
      this.allTransaction = res;
      this.fun();
    });
  }
  fun() {
    for (let i = 0 ; i < this.allTransaction.length ; i++) {
      this.date[i] = new Date(this.allTransaction[i].timestamp);
      // tslint:disable-next-line: no-unused-expression
      this.orderDate[i] = ('0' + this.date[i].getDate()).slice(-2) + '/'
      + ('0' + (this.date[i].getMonth() + 1)).slice(-2) + '/'
      + this.date[i].getFullYear();
    }
    console.log(this.orderDate[0]);
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.allTransaction.length; i++) {
        this.retdup.push(this.allTransaction[i].vendor_name);
    }
    this.retdup.sort();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i <  this.retdup.length; i++) {
      if (this.retdup[i] !== this.temp) {
        this.retailers.push(this.retdup[i]);
        this.temp = this.retdup[i];
      }
    }
    console.log(this.retailers);
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
onScroll() {
  if (this.notscrolly && this.notEmptyPost) {
    this.spinner.show();
    this.notscrolly = false;
    this.loadNextPost();
    }
  }
  loadNextPost() {
    // return last post from the array
    const lastPost = this.allTransaction[this.allTransaction.length - 1];
    // get id of last post
    const lastPostId = lastPost.id;
    // sent this id as key value pare using formdata()
    const dataToSend = new FormData();
    dataToSend.append('id', dataToSend.toString());
    this.transaction.getNextOrders(dataToSend)
      .subscribe((data) => {
        const newPost = data[0];
        this.spinner.hide();
        if (newPost.length === 0 ) {
          this.notEmptyPost =  false;
        }
        this.allTransaction = this.allTransaction.concat(newPost);
        this.notscrolly = true;
      });
  }
  setStatusColor(status: any) {
    return status;
  }
  onReset() {
    this.statusControl.setValue('');
    this.myControl.setValue('');
  }
}
