import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ResetPasswordModalComponent } from './reset-password-modal/reset-password-modal.component';
import { ForgotPasswordModalComponent } from './forgot-password-modal/forgot-password-modal.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../shared/loaders/http-loader-factory';
import { UnauthenticatedRoutingModule } from './unauthenticated-routing.module';

@NgModule({
  declarations: [AuthComponent, ResetPasswordModalComponent, ForgotPasswordModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UnauthenticatedRoutingModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class UnauthenticatedModule {}
