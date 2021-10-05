import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/components/home/project';

@Component({
    selector: 'app-project-panel',
    templateUrl: './project-panel.component.html',
    styleUrls: ['./project-panel.component.less']
})
export class ProjectPanelComponent implements OnInit {
    @Input() project: Project;

    constructor() {
    }

    ngOnInit(): void {
    }

}
