import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGestorComponent } from './add-gestor.component';

describe('AddGestorComponent', () => {
  let component: AddGestorComponent;
  let fixture: ComponentFixture<AddGestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGestorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
