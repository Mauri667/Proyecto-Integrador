import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeducacionComponent } from './editeducacion.component';

describe('EditeducacionComponent', () => {
  let component: EditeducacionComponent;
  let fixture: ComponentFixture<EditeducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
