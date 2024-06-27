import { Component } from '@angular/core';
import { Experience } from './experience.model';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.less'],
})
export class ExperienceComponent {
    experiences: Experience[] = [
        {
            title: 'Student',
            location: 'Grand Rapids, MI',
            employer: 'Calvin College',
            startDate: 'August 2014',
            endDate: 'May 2019',
            jobDescription: 'Student at Calvin College; received degrees in Computer Science and Mathematics',
        },
        {
            title: 'Research Assistant',
            location: 'Grand Rapids, MI',
            employer: 'Calvin College',
            startDate: 'May 2018',
            endDate: 'September 2018',
            jobDescription:
                'Used machine learning techniques with Twitter data to do stance detection on whether a given tweet was pro- or anti-' +
                ' mining corporations in Australia',
        },
        {
            title: 'Software Engineer',
            location: 'East Lansing, MI',
            employer: 'Vertafore, Inc.',
            startDate: 'July 2019',
            jobDescription: 'Full-stack engineer working on an Angular front-end app with a microservices backend',
            companyDescription:
                'Vertafore automates and simplifies insurance solutions for the entire insurance distribution channel',
        },
    ];
}
