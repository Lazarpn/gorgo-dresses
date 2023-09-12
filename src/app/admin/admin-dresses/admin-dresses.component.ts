import { Component, OnInit } from '@angular/core';
import { DressAdminBasicInfoModel } from 'src/app/shared/models/dress/dress-admin-basic-info-model';
import { DressDataService } from 'src/app/shared/services/dress-data.service';
import { DressService } from 'src/app/shared/services/dress.service';

@Component({
  selector: 'gd-admin-dresses-component',
  templateUrl: './admin-dresses.component.html',
  styleUrls: ['./admin-dresses.component.scss'],
})
export class AdminDressesComponent implements OnInit {
  dresses: DressAdminBasicInfoModel[];

  constructor(private dressDataService: DressDataService, private dressService: DressService) {}

  ngOnInit(): void {
    this.dresses = this.dressService.getDressesAdminBasicInfo();

    if (!this.dresses) {
      this.dressDataService.getDressesAdminBasicInfo();
    }

    this.dressService.dressesAdminBasicInfoChanged.subscribe(dresses => {
      this.dresses = dresses;
    });
  }

  ngOnDestroy(): void {}
}
