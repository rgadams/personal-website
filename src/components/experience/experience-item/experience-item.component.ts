import { Component, Input } from '@angular/core';
import { Experience } from '../experience';

@Component({
    selector: 'app-experience-item',
    templateUrl: './experience-item.component.html',
    styleUrls: ['./experience-item.component.less']
})
export class ExperienceItemComponent {
    @Input() experience: Experience;

    constructor() {
    }

}
