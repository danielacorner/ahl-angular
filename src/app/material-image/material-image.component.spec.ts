import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialImageComponent } from './material-image.component';

describe('MaterialImageComponent', () => {
  let component: MaterialImageComponent;
  let fixture: ComponentFixture<MaterialImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
