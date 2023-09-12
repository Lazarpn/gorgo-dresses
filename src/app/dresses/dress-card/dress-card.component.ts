import { Component, HostBinding, Input } from '@angular/core';
import { DressBasicInfoModel } from 'src/app/shared/models/dress/dress-basic-info-model';

@Component({
  selector: 'gd-dress-card',
  templateUrl: './dress-card.component.html',
  styleUrls: ['./dress-card.component.scss'],
})
export class DressCardComponent {
  @Input() set dress(model: DressBasicInfoModel) {
    this.backgroundImage = `url(${model.fileUrl})`;
  }
  @HostBinding('style.background-image') backgroundImage;

  constructor() {}

  ngOnDestroy(): void {}
}
