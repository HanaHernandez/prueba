import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabialesComponent } from './labiales.component';

describe('LabialesComponent', () => {
  let component: LabialesComponent;
  let fixture: ComponentFixture<LabialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
