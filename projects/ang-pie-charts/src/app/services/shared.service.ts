import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private dataSource = new BehaviorSubject<{ values: number[]; labels: string[] }>({ values: [], labels: [] });
  currentData = this.dataSource.asObservable();

  constructor() {}

  changeData(values: number[], labels: string[]) {
    this.dataSource.next({ values, labels });
  }
}
