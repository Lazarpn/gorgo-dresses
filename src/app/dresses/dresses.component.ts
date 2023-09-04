import { Component, OnInit } from '@angular/core';
import { DressDataService } from '../shared/services/dress-data.service';

@Component({
  selector: 'gd-dresses',
  templateUrl: './dresses.component.html',
  styleUrls: ['./dresses.component.scss'],
})
export class DressesComponent implements OnInit {
  constructor(private dressDataService: DressDataService) {}

  ngOnInit(): void {
    this.dressDataService.getDresses();
  }

  ngOnDestroy(): void {}
}
