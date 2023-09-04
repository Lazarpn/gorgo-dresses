import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordModalComponent } from './reset-password-modal/reset-password-modal.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vencanice',
    pathMatch: 'full',
  },
  {
    path: 'vencanice',
    loadChildren: () => import('../dresses/dresses.module').then(m => m.DressesModule),
  },
  {
    path: 'prijava',
    component: AuthComponent,
  },
  {
    path: 'reset-password/:userId/:token',
    component: ResetPasswordModalComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnauthenticatedRoutingModule {}
