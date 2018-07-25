import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialProductsSelectorComponent } from './financial-products-selector.component';

describe('FinancialProductsSelectorComponent', () => {
  let component: FinancialProductsSelectorComponent;
  let fixture: ComponentFixture<FinancialProductsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialProductsSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialProductsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
