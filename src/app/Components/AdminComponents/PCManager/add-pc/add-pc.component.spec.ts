import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPCComponent } from './add-pc.component';

describe('AddPCComponent', () => {
  let component: AddPCComponent;
  let fixture: ComponentFixture<AddPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
