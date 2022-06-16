import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation.component';
import { SquareGameComponent } from './square-game/square-game.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TransitionsComponent } from './transitions/transitions.component';
import { AnimationsComponent } from './animations/animations.component';
import { JavascriptAnimationsComponent } from './javascript-animations/javascript-animations.component';

const routes: Routes = [
    {
        path: '',
        component: AnimationComponent,
        children: [
            { path: 'square-game', component: SquareGameComponent },
            { path: 'transitions', component: TransitionsComponent },
            { path: 'animations', component: AnimationsComponent },
            { path: 'javascript', component: JavascriptAnimationsComponent }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        AnimationComponent,
        AnimationsComponent,
        JavascriptAnimationsComponent,
        SquareGameComponent,
        TransitionsComponent,
    ]
})
export class AnimationModule {
}
