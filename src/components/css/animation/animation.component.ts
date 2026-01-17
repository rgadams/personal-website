import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router, RouterOutlet, RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-css-animations',
    templateUrl: './animation.component.html',
    styleUrls: ['./animation.component.less'],
    imports: [NgbModule, RouterLink, RouterOutlet]
})
export class AnimationComponent implements OnInit, OnDestroy {
    currentPath: string;
    routerSubscription: Subscription;
    links = [
        { title: 'Square Game', link: 'square-game' },
        { title: 'Transitions', link: 'transitions' },
        { title: 'Animations', link: 'animations' },
        { title: 'JavaScript Animations', link: 'javascript' },
    ];

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.checkForSpecificRoute();
        this.currentPath = this.router.url.replace('/animation/', '');
        this.routerSubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.checkForSpecificRoute();
                this.currentPath = event.url.replace('/animation/', '');
            }
        });
    }

    ngOnDestroy(): void {
        this.routerSubscription.unsubscribe();
    }

    resetFocus(): void {
        window.focus();
    }

    private checkForSpecificRoute(): void {
        if (this.router.url === '/animation') {
            this.router.navigate([`${this.router.url}/${this.links[0].link}`]);
        }
    }
}
