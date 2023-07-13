import { Injectable } from '@angular/core';
import { Bank } from '../models/bank';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public cbank = new Bank;
}
