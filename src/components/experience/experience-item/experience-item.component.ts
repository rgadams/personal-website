import { Component, Input } from '@angular/core';
import { Experience } from 'src/components/experience/experience.model';

@Component({
    selector: 'app-experience-item',
    templateUrl: './experience-item.component.html',
    styleUrls: ['./experience-item.component.less'],
})
export class ExperienceItemComponent {
    @Input() experience: Experience;
}
