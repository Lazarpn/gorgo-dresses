import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { HttpLoaderFactory } from './loaders/http-loader-factory';
import { HttpClient } from '@angular/common/http';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageCropperModalComponent } from './components/image-cropper-modal/image-cropper-modal.component';

@NgModule({
  declarations: [ImageCropperModalComponent],
  imports: [
    CommonModule,
    MatCommonModule,
    MatDialogModule,
    ImageCropperModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [],
})
export class SharedModule {}
