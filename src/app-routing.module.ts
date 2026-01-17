import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasThreeDimensionsComponent } from './components/canvas-three-dimensions/canvas-three-dimensions.component';
import { ParallelWorkersComponent } from './components/parallel-workers/parallel-workers.component';
import { AboutComponent } from 'src/components/about/about.component';
import { GameOfLifeComponent } from 'src/components/webassembly/game-of-life/game-of-life.component';
import { PrimesComponent } from 'src/components/webassembly/primes/primes.component';
import { GravityComponent } from 'src/components/webassembly/gravity/gravity.component';
import { Gravity2Component } from 'src/components/webassembly/gravity2/gravity2.component';
import { SquareGameComponent } from 'src/components/css/animation/square-game/square-game.component';
import { TransitionsComponent } from 'src/components/css/animation/transitions/transitions.component';
import { AnimationsComponent } from 'src/components/css/animation/animations/animations.component';
import { JavascriptAnimationsComponent } from 'src/components/css/animation/javascript-animations/javascript-animations.component';

export const routes: Routes = [
    { path: 'canvas', component: CanvasThreeDimensionsComponent },
    { path: 'parallel', component: ParallelWorkersComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'experience',
        loadComponent: () => import('src/components/experience/experience.component').then(m => m.ExperienceComponent)
    },
    {
        path: 'animation',
        loadComponent: () => import('src/components/css/animation/animation.component').then(m => m.AnimationComponent),
        children: [
            { path: 'square-game', component: SquareGameComponent },
            { path: 'transitions', component: TransitionsComponent },
            { path: 'animations', component: AnimationsComponent },
            { path: 'javascript', component: JavascriptAnimationsComponent }
        ]
    },
    {
        path: 'webassembly',
        loadComponent: () => import('src/components/webassembly/webassembly.component').then(m => m.WebassemblyComponent),
        children: [
            { path: 'life', component: GameOfLifeComponent },
            { path: 'primes', component: PrimesComponent },
            { path: 'gravity/one', component: GravityComponent },
            { path: 'gravity/two', component: Gravity2Component },
        ]
    },
    {
        path: '',
        loadComponent: () => import('src/components/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: '**',
        loadComponent: () => import('src/components/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)
    },
];

