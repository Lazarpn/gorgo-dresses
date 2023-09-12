import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpLoaderFactory } from '../shared/loaders/http-loader-factory';
import { DressesComponent } from './dresses.component';
import { MatSelectModule } from '@angular/material/select';
import { DressesListComponent } from './dresses-list/dresses-list.component';
import { DressCardComponent } from './dress-card/dress-card.component';
import { DressComponent } from './dress/dress.component';
import { DressesRoutingModule } from './dresses-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DressesComponent, DressesListComponent, DressCardComponent, DressComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    DressesRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class DressesModule {}
