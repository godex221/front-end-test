import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SELL } from '../utils/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SellsService {

  constructor(private http: HttpClient) { }

  getSells() { 
    return new Promise<SELL[]>((resolve, reject) => { 
      resolve([]);
    });
  }
}
