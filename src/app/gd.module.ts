import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './gd-routing.module';
import { GdComponent } from './gd.component';

@NgModule({
  declarations: [GdComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [GdComponent],
})
export class GdModule {}
