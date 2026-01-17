import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgbNav, NgbNavItem, NgbNavLink } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-webassembly',
    imports: [NgbNav, NgbNavItem, NgbNavLink, RouterLink, RouterOutlet],
    templateUrl: './webassembly.component.html',
    styleUrls: ['./webassembly.component.less'],
})
export class WebassemblyComponent implements OnInit, OnDestroy {
    currentPath: string;
    routerSubscription: Subscription;
    links = [
        { title: 'Game of Life', link: 'life' },
        { title: 'Primes', link: 'primes' },
        { title: 'Gravity 1', link: 'gravity/one' },
        { title: 'Gravity 2', link: 'gravity/two' },
    ];

    constructor(private router: Router) {}

    ngOnInit() {
        this.checkForSpecificRoute();
        this.currentPath = this.router.url.replace('/webassembly/', '');
        this.routerSubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.checkForSpecificRoute();
                this.currentPath = event.url.replace('/webassembly/', '');
            }
        });
    }

    ngOnDestroy() {
        this.routerSubscription.unsubscribe();
    }

    resetFocus() {
        window.focus();
    }

    private checkForSpecificRoute() {
        if (this.router.url === '/webassembly') {
            this.router.navigate([`${this.router.url}/${this.links[0].link}`]);
        }
    }
}
