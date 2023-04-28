import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePCComponent } from './delete-pc.component';

describe('DeletePCComponent', () => {
  let component: DeletePCComponent;
  let fixture: ComponentFixture<DeletePCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
