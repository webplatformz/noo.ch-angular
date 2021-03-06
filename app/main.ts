import { bootstrap }        from '@angular/platform-browser-dynamic';
import { LocationStrategy, PathLocationStrategy} from '@angular/common';
import { provide, enableProdMode} from '@angular/core';
import { AppComponent }     from './app.component';
import { HTTP_PROVIDERS }   from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: PathLocationStrategy})
])