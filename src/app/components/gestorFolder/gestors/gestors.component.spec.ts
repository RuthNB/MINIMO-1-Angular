import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorsComponent } from './gestors.component';

describe('GestorsComponent', () => {
  let component: GestorsComponent;
  let fixture: ComponentFixture<GestorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
