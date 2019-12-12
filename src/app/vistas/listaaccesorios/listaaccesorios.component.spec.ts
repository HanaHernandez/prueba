import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaaccesoriosComponent } from './listaaccesorios.component';

describe('ListaaccesoriosComponent', () => {
  let component: ListaaccesoriosComponent;
  let fixture: ComponentFixture<ListaaccesoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaaccesoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaaccesoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
