import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDressesComponent } from './admin-dresses.component';
import { AdminDressComponent } from './admin-dress/admin-dress.component';
import { DressResolver } from 'src/app/shared/resolvers/dress.resolver';

const routes: Routes = [
  {
    path: '',
    component: AdminDressesComponent,
  },
  {
    path: ':id',
    component: AdminDressComponent,
    resolve: { dress: DressResolver },
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDressesRoutingModule {}
