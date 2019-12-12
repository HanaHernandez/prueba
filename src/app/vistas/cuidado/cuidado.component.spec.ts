import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadoComponent } from './cuidado.component';

describe('CuidadoComponent', () => {
  let component: CuidadoComponent;
  let fixture: ComponentFixture<CuidadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuidadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
