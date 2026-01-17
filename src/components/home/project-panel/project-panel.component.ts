import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Project } from 'src/components/home/project';

@Component({
    selector: 'app-project-panel',
    imports: [CommonModule, RouterModule],
    templateUrl: './project-panel.component.html',
    styleUrls: ['./project-panel.component.less'],
})
export class ProjectPanelComponent {
    @Input() project: Project;
}
