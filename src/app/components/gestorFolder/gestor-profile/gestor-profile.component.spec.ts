import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorProfileComponent } from './gestor-profile.component';

describe('GestorProfileComponent', () => {
  let component: GestorProfileComponent;
  let fixture: ComponentFixture<GestorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
