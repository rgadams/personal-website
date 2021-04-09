import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
    menuItems = [
        {
            link: '/canvas',
            name: '3D Graphics'
        },
        {
            link: '/parallel',
            name: 'Web Workers'
        },
        {
            link: '/grid',
            name: 'CSS Grid'
        },
        {
            link: '/life',
            name: 'Game of Life'
        },
        {
            link: '/primes',
            name: 'WebAssembly Primes'
        },
    ];

    constructor() {
    }

    ngOnInit() {

    }

}
