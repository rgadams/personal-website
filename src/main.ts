import { enableProdMode, provideZoneChangeDetection } from '@angular/core';

import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from 'src/components/app/app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { routes } from 'src/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routes),
        CommonModule,
        FormsModule,
        NgbModule,
        provideZoneChangeDetection()
    ],
}).catch(err => console.error(err));
