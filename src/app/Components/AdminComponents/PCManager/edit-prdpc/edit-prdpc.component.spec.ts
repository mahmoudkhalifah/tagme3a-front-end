import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrdpcComponent } from './edit-prdpc.component';

describe('EditPrdpcComponent', () => {
  let component: EditPrdpcComponent;
  let fixture: ComponentFixture<EditPrdpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPrdpcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPrdpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
