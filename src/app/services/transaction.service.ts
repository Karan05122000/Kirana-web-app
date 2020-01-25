import { Injectable } from '@angular/core';
import { transactions } from '../constants/mockup-data';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }

  getAllTransactions() {
    return transactions;
  }
}
