import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Router } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { AppModule } from './app/app.module';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));

//bootstrapApplication(AppComponent, appConfig)
  //.catch((err) => console.error(err));
