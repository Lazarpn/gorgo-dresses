import { Component, OnInit } from '@angular/core';
import { DressAdminModel } from 'src/app/shared/models/dress/dress-admin-model';
import { DressService } from 'src/app/shared/services/dress.service';

@Component({
  selector: 'gd-admin-dress',
  templateUrl: './admin-dress.component.html',
  styleUrls: ['./admin-dress.component.scss'],
})
export class AdminDressComponent implements OnInit {
  dress: DressAdminModel;

  constructor(private dressService: DressService) {}

  ngOnInit(): void {
    this.dress = this.dressService.getCurrentAdminDress();
    console.log(this.dress);
  }

  onFormSubmit() {}

  ngOnDestroy(): void {}
}
