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
        loadChildren: () => import('src/components/experience/experience.module').then(m => m.ExperienceModule)
    },
    {
        path: 'animation',
        loadChildren: () => import('src/components/css/animation/animation.module').then(m => m.AnimationModule)
    },
    {
        path: 'mix-blend-mode',
        loadChildren: () => import('src/components/css/mix-blend-mode/mix-blend-mode.module').then(m => m.MixBlendModeModule)
    },
    {
        path: 'webassembly',
        loadChildren: () => import('src/components/webassembly/webassembly.module').then(m => m.WebassemblyModule)
    },
    { path: '', loadChildren: () => import('src/components/home/home.module').then(m => m.HomeModule) },
    { path: '**', loadChildren: () => import('src/components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
