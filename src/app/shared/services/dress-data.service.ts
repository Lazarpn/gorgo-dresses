import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DressService } from './dress.service';
import { ExceptionDetail } from 'src/app/shared/models/exception-detail';
import { DressBasicInfoModel } from '../models/dress/dress-basic-info-model';
import { DressAdminBasicInfoModel } from '../models/dress/dress-admin-basic-info-model';
import { DressAdminModel } from '../models/dress/dress-admin-model';
import { Observable } from 'rxjs';
import { DressTypeModel } from '../models/dress/dress-type-model';

@Injectable({ providedIn: 'root' })
export class DressDataService {
  url: string = `${environment.url}/api`;

  constructor(private http: HttpClient, private dressService: DressService) {}

  getDressesBasicInfo() {
    this.http.get<DressBasicInfoModel[]>(`${this.url}/dresses/basic`).subscribe({
      next: dresses => {
        this.dressService.setDressesBasicInfo(dresses);
      },
      error: (exceptions: ExceptionDetail[]) => {
        console.log(exceptions);
      },
    });
  }

  // ADMIN

  getDressesAdminBasicInfo() {
    this.http.get<DressAdminBasicInfoModel[]>(`${this.url}/dresses`).subscribe({
      next: dresses => {
        console.log(dresses);
        this.dressService.setDressesAdminBasicInfo(dresses);
      },
      error: (exceptions: ExceptionDetail[]) => {
        console.log(exceptions);
      },
    });
  }

  getDressAdmin(id: string): Observable<DressAdminModel> {
    return this.http.get<DressAdminModel>(`${this.url}/dresses/${id}`);
  }

  getDressTypes() {
    this.http.get<DressTypeModel[]>(`${this.url}/dresses/types`).subscribe({
      next: types => {
        this.dressService.setDressTypes(types);
      },
      error: (exceptions: ExceptionDetail[]) => {
        console.log(exceptions);
      },
    });
  }

  deleteDress(id: string) {
    this.http.delete<void>(`${this.url}/dresses/${id}`).subscribe({
      next: _ => {
        this.dressService.deleteDress(id);
      },
      error: (exceptions: ExceptionDetail[]) => {
        console.log(exceptions);
      },
    });
  }
}
