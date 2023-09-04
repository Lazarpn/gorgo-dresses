import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthenticatedGuard } from './shared/guards/unauthenticated.guard';
import { AuthenticatedGuard } from './shared/guards/authenticated.guard';

const routes: Routes = [
  {
    path: '',
    // canActivate: [UnauthenticatedGuard],
    loadChildren: () =>
      import('./+unauthenticated/unauthenticated.module').then(m => m.UnauthenticatedModule),
  },
  {
    path: '',
    canActivate: [AuthenticatedGuard],
    // resolve: { userData: AuthenticatedResolver },
    loadChildren: () =>
      import('./+authenticated/authenticated.module').then(m => m.AuthenticatedModule),
  },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
