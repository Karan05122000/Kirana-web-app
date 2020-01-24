import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  isExpanded = false;
  private expanded = new Subject<boolean>();
  expandedStatus$ = this.expanded.asObservable();
  constructor() { }

  getExpandedStatus() {
    return this.isExpanded;
  }

  setExpandStatus(isExpanded: boolean) {
    this.isExpanded = isExpanded;
    this.expanded.next(this.isExpanded);
  }

}
