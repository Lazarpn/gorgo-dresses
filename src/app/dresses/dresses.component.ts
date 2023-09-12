import { Component, OnInit } from '@angular/core';
import { DressDataService } from '../shared/services/dress-data.service';
import { DressService } from '../shared/services/dress.service';
import { DressBasicInfoModel } from '../shared/models/dress/dress-basic-info-model';
import { DressSearchFilter } from '../shared/models/form/dress-search-filter-form';
import { DressTypeModel } from '../shared/models/dress/dress-type-model';
import { SortTypeModel } from '../shared/models/form/sort-type-model';
import { FilterService } from '../shared/services/filter.service';

@Component({
  selector: 'gd-dresses',
  templateUrl: './dresses.component.html',
  styleUrls: ['./dresses.component.scss'],
})
export class DressesComponent implements OnInit {
  dresses: DressBasicInfoModel[] = [];
  dressTypes: DressTypeModel[] = [];
  sortTypes: SortTypeModel[] = [{ type: 'oldest' }, { type: 'newest' }];
  sortType: SortTypeModel = {
    type: 'newest',
  };
  filter: DressSearchFilter = {
    name: '',
    type: '',
  };

  constructor(
    private dressDataService: DressDataService,
    private dressService: DressService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.dresses = this.dressService.getDressesBasicInfo();
    this.dressTypes = this.dressService.getDressTypes();

    if (!this.dresses) {
      this.dressDataService.getDressesBasicInfo();
    }

    if (!this.dressTypes) {
      this.dressDataService.getDressTypes();
    }

    this.dressService.dressesBasicInfoChanged.subscribe(dresses => {
      this.dresses = dresses;
    });

    this.dressService.dressTypesChanged.subscribe(types => {
      this.dressTypes = types;
    });
  }

  onDressTypeSelected() {
    this.dresses = this.filterService.filterDresses(
      this.filter,
      this.dressService.getDressesBasicInfo()
    );
  }

  onSortTypeSelected() {
    this.dresses = this.filterService.sortDresses(this.sortType, this.dresses);
  }

  ngOnDestroy(): void {}
}
