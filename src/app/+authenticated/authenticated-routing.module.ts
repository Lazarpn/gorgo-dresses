import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'vencanice-admin',
    loadChildren: () =>
      import('../admin/admin-dresses/admin-dresses.module').then(m => m.AdminDressesModule),
  },
  {
    path: 'profil',
    loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticatedRoutingModule {}
