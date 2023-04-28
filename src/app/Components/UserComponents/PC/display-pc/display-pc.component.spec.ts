import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPCComponent } from './display-pc.component';

describe('DisplayPCComponent', () => {
  let component: DisplayPCComponent;
  let fixture: ComponentFixture<DisplayPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
