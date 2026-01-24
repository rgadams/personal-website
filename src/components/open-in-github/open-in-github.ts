import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-open-in-github',
  imports: [],
  templateUrl: './open-in-github.html',
  styleUrl: './open-in-github.less',
})
export class OpenInGithub {
  @Input() githubLink: string;
  @Input() label: string;
}
