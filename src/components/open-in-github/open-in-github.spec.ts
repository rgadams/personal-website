import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenInGithub } from './open-in-github';

describe('OpenInGithub', () => {
  let component: OpenInGithub;
  let fixture: ComponentFixture<OpenInGithub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenInGithub]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenInGithub);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
