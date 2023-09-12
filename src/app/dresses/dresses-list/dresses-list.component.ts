import { Component, Input } from '@angular/core';
import { DressBasicInfoModel } from 'src/app/shared/models/dress/dress-basic-info-model';

@Component({
  selector: 'gd-dresses-list',
  templateUrl: './dresses-list.component.html',
  styleUrls: ['./dresses-list.component.scss'],
})
export class DressesListComponent {
  @Input() dresses: DressBasicInfoModel[] = [];

  constructor() {}

  ngOnDestroy(): void {}
}
