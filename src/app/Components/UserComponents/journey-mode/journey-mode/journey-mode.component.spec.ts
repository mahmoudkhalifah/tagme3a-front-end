import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyModeComponent } from './journey-mode.component';

describe('JourneyModeComponent', () => {
  let component: JourneyModeComponent;
  let fixture: ComponentFixture<JourneyModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyModeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
