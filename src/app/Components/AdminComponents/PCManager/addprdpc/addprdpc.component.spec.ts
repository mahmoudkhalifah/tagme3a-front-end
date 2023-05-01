import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprdpcComponent } from './addprdpc.component';

describe('AddprdpcComponent', () => {
  let component: AddprdpcComponent;
  let fixture: ComponentFixture<AddprdpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprdpcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddprdpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
