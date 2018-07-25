import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheStoreComponent } from './the-store.component';

describe('TheStoreComponent', () => {
  let component: TheStoreComponent;
  let fixture: ComponentFixture<TheStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
