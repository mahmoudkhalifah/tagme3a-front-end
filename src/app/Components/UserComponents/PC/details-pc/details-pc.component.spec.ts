import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPCComponent } from './details-pc.component';

describe('DetailsPCComponent', () => {
  let component: DetailsPCComponent;
  let fixture: ComponentFixture<DetailsPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
