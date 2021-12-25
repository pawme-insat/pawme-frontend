import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsValuesComponent } from './about-us-values.component';

describe('AboutUsValuesComponent', () => {
  let component: AboutUsValuesComponent;
  let fixture: ComponentFixture<AboutUsValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
