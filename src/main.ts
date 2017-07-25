import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'rxjs/add/observable/merge';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
