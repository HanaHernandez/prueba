import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OjosComponent } from './ojos.component';

describe('OjosComponent', () => {
  let component: OjosComponent;
  let fixture: ComponentFixture<OjosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OjosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OjosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
