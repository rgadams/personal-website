import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelWorkersComponent } from './parallel-workers.component';

describe('ParallelWorkersComponent', () => {
  let component: ParallelWorkersComponent;
  let fixture: ComponentFixture<ParallelWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallelWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallelWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
