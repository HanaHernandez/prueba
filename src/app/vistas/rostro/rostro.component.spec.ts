import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RostroComponent } from './rostro.component';

describe('RostroComponent', () => {
  let component: RostroComponent;
  let fixture: ComponentFixture<RostroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RostroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RostroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
