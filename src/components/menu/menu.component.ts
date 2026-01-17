import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-menu',
    imports: [RouterLink, NgbModule],
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.less'],
})
export class MenuComponent {
    menuItems = [
        { link: '/canvas', name: '3D Graphics' },
        { link: '/parallel', name: 'Web Workers' },
        { link: '/webassembly', name: 'WebAssembly' },
        { link: '/animation', name: 'CSS Animations' },
    ];
}
