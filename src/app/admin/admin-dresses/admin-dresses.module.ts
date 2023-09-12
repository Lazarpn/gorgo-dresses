import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminDressesRoutingModule } from './admin-dresses-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/shared/loaders/http-loader-factory';
import { HttpClient } from '@angular/common/http';
import { AdminDressesListComponent } from './admin-dresses-list/admin-dresses-list.component';
import { AdminDressComponent } from './admin-dress/admin-dress.component';
import { AdminDressCardComponent } from './admin-dress-card/admin-dress-card.component';
import { AdminDressesComponent } from './admin-dresses.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminDressesComponent,
    AdminDressesListComponent,
    AdminDressComponent,
    AdminDressCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AdminDressesRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class AdminDressesModule {}
