import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtocartPcComponent } from './addtocart-pc.component';

describe('AddtocartPcComponent', () => {
  let component: AddtocartPcComponent;
  let fixture: ComponentFixture<AddtocartPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtocartPcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtocartPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
