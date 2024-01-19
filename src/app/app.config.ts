import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
function registerLocaleData(localeFr: any, arg1: string) {
  throw new Error('Function not implemented.');
}

