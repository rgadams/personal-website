import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from 'src/components/experience/experience.component';
import { ExperienceItemComponent } from 'src/components/experience/experience-item/experience-item.component';
import { ReversePipe } from 'src/pipes/reverse.pipe';

const routes: Routes = [
    {
        path: '',
        component: ExperienceComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        ExperienceItemComponent
    ],
    declarations: [
        ExperienceComponent,
        ExperienceItemComponent,
        ReversePipe
    ],
    providers: [
        ReversePipe
    ]
})
export class ExperienceModule {
}
