import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.less']
})
export class MenuComponent {
    menuItems = [
        { link: '/canvas', name: '3D Graphics' },
        { link: '/parallel', name: 'Web Workers' },
        { link: '/webassembly', name: 'WebAssembly' },
        { link: '/animation', name: 'CSS Animations' }
    ];
}
