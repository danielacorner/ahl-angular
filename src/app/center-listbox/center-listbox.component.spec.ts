import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterListboxComponent } from './center-listbox.component';

describe('CenterListboxComponent', () => {
  let component: CenterListboxComponent;
  let fixture: ComponentFixture<CenterListboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterListboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterListboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
