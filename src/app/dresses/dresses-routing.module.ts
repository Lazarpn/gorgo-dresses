import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DressesComponent } from './dresses.component';

const routes: Routes = [
  {
    path: '',
    component: DressesComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DressesRoutingModule {}
