import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebassemblyComponent } from 'src/components/webassembly/webassembly.component';
import { GameOfLifeComponent } from 'src/components/webassembly/game-of-life/game-of-life.component';
import { GravityComponent } from 'src/components/webassembly/gravity/gravity.component';
import { Gravity2Component } from 'src/components/webassembly/gravity2/gravity2.component';
import { PrimesComponent } from 'src/components/webassembly/primes/primes.component';
import { WebGlService } from 'src/services/web-gl.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '', component: WebassemblyComponent, children: [
            { path: 'life', component: GameOfLifeComponent },
            { path: 'primes', component: PrimesComponent },
            { path: 'gravity/one', component: GravityComponent },
            { path: 'gravity/two', component: Gravity2Component },
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        WebassemblyComponent,
        GameOfLifeComponent,
        GravityComponent,
        Gravity2Component,
        PrimesComponent
    ],
    providers: [
        WebGlService
    ]
})
export class WebassemblyModule {
}
