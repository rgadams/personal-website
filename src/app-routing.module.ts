import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanvasThreeDimensionsComponent } from './components/canvas-three-dimensions/canvas-three-dimensions.component';
import { ParallelWorkersComponent } from './components/parallel-workers/parallel-workers.component';
import { GridComponent } from 'src/components/grid/grid.component';
import { GameOfLifeComponent } from 'src/components/game-of-life/game-of-life.component';
import { AboutComponent } from 'src/components/about/about.component';
import { PrimesComponent } from 'src/components/primes/primes.component';
import { HomeComponent } from 'src/components/home/home.component';
import { GravityComponent } from 'src/components/gravity/gravity.component';
import { Gravity2Component } from 'src/components/gravity2/gravity2.component';

const routes: Routes = [
  { path: 'canvas', component: CanvasThreeDimensionsComponent },
  { path: 'parallel', component: ParallelWorkersComponent },
  { path: 'grid', component: GridComponent },
  { path: 'life', component: GameOfLifeComponent },
  { path: 'primes', component: PrimesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gravity', component: GravityComponent },
  { path: 'gravity2', component: Gravity2Component },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
