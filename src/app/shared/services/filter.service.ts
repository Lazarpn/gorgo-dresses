import { Injectable } from '@angular/core';
import { DressSearchFilter } from '../models/form/dress-search-filter-form';
import { DressBasicInfoModel } from '../models/dress/dress-basic-info-model';
import { SortTypeModel } from '../models/form/sort-type-model';

@Injectable({ providedIn: 'root' })
export class FilterService {
  constructor() {}

  filterDresses(filter: DressSearchFilter, dresses: DressBasicInfoModel[]): DressBasicInfoModel[] {
    console.log(filter, dresses);
    const filteredDresses = dresses.filter(
      dress =>
        dress.name.includes(filter.name) && (dress.type.includes(filter.type) || !filter.type)
    );

    return filteredDresses;
  }

  sortDresses(sortType: SortTypeModel, dresses: DressBasicInfoModel[]): DressBasicInfoModel[] {
    let sortedDresses: DressBasicInfoModel[] = [];
    if (sortType.type === 'newest') {
      sortedDresses = dresses.sort(
        (b, a) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    } else {
      sortedDresses = dresses.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    }
    return sortedDresses;
  }
}
