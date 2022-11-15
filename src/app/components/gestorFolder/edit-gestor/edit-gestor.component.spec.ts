import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGestorComponent } from './edit-gestor.component';

describe('EditGestorComponent', () => {
  let component: EditGestorComponent;
  let fixture: ComponentFixture<EditGestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGestorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
