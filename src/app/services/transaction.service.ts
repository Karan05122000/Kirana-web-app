import { transactions } from './../constants/mockup-data';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable} from 'rxjs';
import { Transactions } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  getAllTransactionsURL: any;
  tempURL: any;
  httpOptions;
  buildURLS() {
    this.getAllTransactionsURL = environment.backend_end_point + environment.retailers + environment.orders;
  }

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('access');
    this.httpOptions = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + token});
    this.buildURLS();
  }

  getAllOrders(): Observable<Transactions[]> {
    return this.http.get<Transactions[]>(this.getAllTransactionsURL)
    .pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }

  getAllTransactions() {
    return transactions;
  }
}
