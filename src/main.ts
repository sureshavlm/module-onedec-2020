import { DemoModule } from './demo.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(DemoModule)
	.catch(err => console.log(err));