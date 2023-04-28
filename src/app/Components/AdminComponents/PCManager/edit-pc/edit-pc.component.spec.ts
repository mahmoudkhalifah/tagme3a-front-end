import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPCComponent } from './edit-pc.component';

describe('EditPCComponent', () => {
  let component: EditPCComponent;
  let fixture: ComponentFixture<EditPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
