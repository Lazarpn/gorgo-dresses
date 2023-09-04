import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DressModel } from '../models/dress/dress-model';

@Injectable({ providedIn: 'root' })
export class DressDataService {
  url: string = `${environment.url}/api`;

  constructor(private http: HttpClient) {}

  getDresses() {
    this.http.get<DressModel[]>(`${this.url}/dresses`).subscribe(dresses => {
      console.log(dresses);
    });
  }
}
