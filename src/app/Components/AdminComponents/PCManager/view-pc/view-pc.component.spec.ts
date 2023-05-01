import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPCComponent } from './view-pc.component';

describe('ViewPCComponent', () => {
  let component: ViewPCComponent;
  let fixture: ComponentFixture<ViewPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
