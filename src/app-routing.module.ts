import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasThreeDimensionsComponent } from './components/canvas-three-dimensions/canvas-three-dimensions.component';
import { ParallelWorkersComponent } from './components/parallel-workers/parallel-workers.component';
import { AboutComponent } from 'src/components/about/about.component';

const routes: Routes = [
    { path: 'canvas', component: CanvasThreeDimensionsComponent },
    { path: 'parallel', component: ParallelWorkersComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'experience',
        loadComponent: () => import('src/components/experience/experience.component').then(m => m.ExperienceComponent)
    },
    {
        path: 'animation',
        loadChildren: () => import('src/components/css/animation/animation.component').then(m => m.AnimationComponent)
    },
    {
        path: 'webassembly',
        loadChildren: () => import('src/components/webassembly/webassembly.component').then(m => m.WebassemblyComponent)
    },
    { path: '', loadComponent: () => import('src/components/home/home.component').then(m => m.HomeComponent) },
    { path: '**', loadChildren: () => import('src/components/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
