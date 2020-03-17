import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CanvasThreeDimensionsComponent} from './canvas-three-dimensions/canvas-three-dimensions.component';
import {ParallelWorkersComponent} from './parallel-workers/parallel-workers.component';


const routes: Routes = [
  { path: 'canvas', component: CanvasThreeDimensionsComponent },
  { path: 'parallel', component: ParallelWorkersComponent },
  { path: '', redirectTo: '/canvas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
