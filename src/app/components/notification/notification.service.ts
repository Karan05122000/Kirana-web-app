import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharingService {
  private msgService = new BehaviorSubject<string>('');
  

  constructor() { }
}
