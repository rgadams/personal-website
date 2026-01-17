import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from 'src/components/menu/menu.component';

@Component({
    selector: 'app-root',
    imports: [MenuComponent, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent {
    title = 'personal-website';
}
