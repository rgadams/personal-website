import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-menu',
    imports: [RouterLink, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem],
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
