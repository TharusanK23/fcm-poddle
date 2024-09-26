import { ApplicationConfig } from '@angular/core';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AsyncPipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';

import { AppModule } from './app.module';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, AppModule),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AsyncPipe
  ]
};
