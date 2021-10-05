import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasThreeDimensionsComponent } from './components/canvas-three-dimensions/canvas-three-dimensions.component';
import { ParallelWorkersComponent } from './components/parallel-workers/parallel-workers.component';
import { GridComponent } from 'src/components/grid/grid.component';
import { AboutComponent } from 'src/components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';

const routes: Routes = [
    { path: 'canvas', component: CanvasThreeDimensionsComponent },
    { path: 'parallel', component: ParallelWorkersComponent },
    { path: 'grid', component: GridComponent }, // No longer a way to get here
    { path: 'about', component: AboutComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'webassembly', loadChildren: () => import('src/components/webassembly/webassembly.module').then(m => m.WebassemblyModule) },
    { path: '', loadChildren: () => import('src/components/home/home.module').then(m => m.HomeModule) },
    { path: '**', loadChildren: () => import('src/components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
