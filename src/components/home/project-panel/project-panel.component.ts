import { Component, Input } from '@angular/core';
import { Project } from 'src/components/home/project';

@Component({
    selector: 'app-project-panel',
    templateUrl: './project-panel.component.html',
    styleUrls: ['./project-panel.component.less'],
})
export class ProjectPanelComponent {
    @Input() project: Project;
}
