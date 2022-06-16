import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptAnimationsComponent } from './javascript-animations.component';

describe('JavascriptAnimationsComponent', () => {
  let component: JavascriptAnimationsComponent;
  let fixture: ComponentFixture<JavascriptAnimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptAnimationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
