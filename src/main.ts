import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { GdModule } from './app/gd.module';

platformBrowserDynamic()
  .bootstrapModule(GdModule)
  .catch(err => console.error(err));
