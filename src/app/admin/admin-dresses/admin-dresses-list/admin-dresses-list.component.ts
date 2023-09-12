import { Component, Input } from '@angular/core';
import { DressAdminBasicInfoModel } from 'src/app/shared/models/dress/dress-admin-basic-info-model';

@Component({
  selector: 'gd-admin-dresses-list',
  templateUrl: './admin-dresses-list.component.html',
  styleUrls: ['./admin-dresses-list.component.scss'],
})
export class AdminDressesListComponent {
  @Input() dresses: DressAdminBasicInfoModel[] = [];

  constructor() {}

  ngOnDestroy(): void {}
}
