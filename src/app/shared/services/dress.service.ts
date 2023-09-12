import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DressBasicInfoModel } from '../models/dress/dress-basic-info-model';
import { DressAdminBasicInfoModel } from '../models/dress/dress-admin-basic-info-model';
import { DressAdminModel } from '../models/dress/dress-admin-model';
import { DressTypeModel } from '../models/dress/dress-type-model';

@Injectable({ providedIn: 'root' })
export class DressService {
  dressesBasicInfo: DressBasicInfoModel[];
  dressesBasicInfoChanged = new Subject<DressBasicInfoModel[]>();
  dressTypes: DressTypeModel[];
  dressTypesChanged = new Subject<DressTypeModel[]>();
  // ADMIN
  dressAdmin: DressAdminModel;
  dressesAdminBasicInfo: DressAdminBasicInfoModel[];
  dressesAdminBasicInfoChanged = new Subject<DressAdminBasicInfoModel[]>();

  constructor() {}

  getDressesBasicInfo(): DressBasicInfoModel[] {
    return this.dressesBasicInfo;
  }

  setDressesBasicInfo(dresses: DressBasicInfoModel[]) {
    this.dressesBasicInfo = dresses;
    this.dressesBasicInfoChanged.next(dresses);
  }

  setDressTypes(types: DressTypeModel[]) {
    this.dressTypes = types;
    this.dressTypesChanged.next(types);
  }

  getDressTypes(): DressTypeModel[] {
    return this.dressTypes;
  }

  // ADMIN

  getDressesAdminBasicInfo(): DressAdminBasicInfoModel[] {
    return this.dressesAdminBasicInfo;
  }

  setDressesAdminBasicInfo(dresses: DressAdminBasicInfoModel[]) {
    this.dressesAdminBasicInfo = dresses;
    this.dressesAdminBasicInfoChanged.next(dresses);
  }

  deleteDress(id: string) {
    const dress = this.dressesAdminBasicInfo.find(d => d.id === id);
    const dressPosition = this.dressesAdminBasicInfo.findIndex(d => d === dress);
    this.dressesAdminBasicInfo.splice(dressPosition, 1);
    this.dressesBasicInfo.splice(dressPosition, 1);
    this.dressesAdminBasicInfoChanged.next(this.dressesAdminBasicInfo);
    this.dressesBasicInfoChanged.next(this.dressesBasicInfo);
  }

  setCurrentAdminDress(model: DressAdminModel) {
    this.dressAdmin = model;
  }

  getCurrentAdminDress(): DressAdminModel {
    return this.dressAdmin;
  }
}
