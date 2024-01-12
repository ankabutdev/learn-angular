import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

bootstrapApplication(AppComponent,
  {
    providers: [
      provideProtractorTestingSupport(),
      provideRouter(routeConfig),
      importProvidersFrom(HttpClientModule),
      importProvidersFrom(BrowserAnimationsModule),
      importProvidersFrom(ErrorStateMatcher),
      importProvidersFrom(ShowOnDirtyErrorStateMatcher)
    ]
  }
).catch(err => console.error(err));