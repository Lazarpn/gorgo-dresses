import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DressAdminBasicInfoModel } from 'src/app/shared/models/dress/dress-admin-basic-info-model';
import { DressDataService } from 'src/app/shared/services/dress-data.service';
import { DressService } from 'src/app/shared/services/dress.service';

@Component({
  selector: 'gd-admin-dress-card',
  templateUrl: './admin-dress-card.component.html',
  styleUrls: ['./admin-dress-card.component.scss'],
})
export class AdminDressCardComponent {
  @Input() dress: DressAdminBasicInfoModel;

  constructor(
    private dressDataService: DressDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnDestroy(): void {}

  onDressDelete() {
    this.dressDataService.deleteDress(this.dress.id);
  }

  onDressEdit() {
    this.router.navigate([`${this.dress.id}`], { relativeTo: this.route });
  }
}
