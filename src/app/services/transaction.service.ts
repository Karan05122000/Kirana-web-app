import { Injectable } from '@angular/core';
import { transactions } from '../constants/mockup-data';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  getAllTransactionsURL: any;
  buildURLS() {
    this.getAllTransactionsURL = environment.backend_end_point + environment.retailers;
  }

  constructor(private http: HttpClient) {
    this.buildURLS();
   }

  getAllOrders() {
    console.log(this.getAllTransactionsURL);
    return this.http.get(this.getAllTransactionsURL);
  }

  getAllTransactions() {
    return transactions;
  }
}
