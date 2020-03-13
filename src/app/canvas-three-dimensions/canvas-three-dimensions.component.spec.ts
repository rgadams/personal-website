import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasThreeDimensionsComponent } from './canvas-three-dimensions.component';

describe('CanvasThreeDimensionsComponent', () => {
  let component: CanvasThreeDimensionsComponent;
  let fixture: ComponentFixture<CanvasThreeDimensionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasThreeDimensionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasThreeDimensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
