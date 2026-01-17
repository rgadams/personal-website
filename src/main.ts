import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from 'src/components/app/app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [CommonModule, FormsModule],
}).catch(err => console.error(err));
