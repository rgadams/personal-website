import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-css-animations',
    templateUrl: './animation.component.html',
    styleUrls: ['./animation.component.less']
})
export class AnimationComponent implements OnInit, OnDestroy {
    currentPath;
    routerSubscription: Subscription;
    links = [
        { title: 'Square Game', link: 'square-game' },
        { title: 'Transitions', link: 'transitions' },
        { title: 'Animations', link: 'animations' },
        { title: 'JavaScript Animations', link: 'javascript' }
    ];

    constructor(private router: Router) {}

    ngOnInit() {
        this.checkForSpecificRoute();
        this.currentPath = this.router.url.replace('/animation/', '');
        this.routerSubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.checkForSpecificRoute();
                this.currentPath = event.url.replace('/animation/', '');
            }
        });
    }

    private checkForSpecificRoute() {
        if (this.router.url === '/animation') {
            this.router.navigate([`${this.router.url}/${this.links[0].link}`]);
        }
    }

    ngOnDestroy() {
        this.routerSubscription.unsubscribe();
    }

    resetFocus() {
        window.focus();
    }
}
