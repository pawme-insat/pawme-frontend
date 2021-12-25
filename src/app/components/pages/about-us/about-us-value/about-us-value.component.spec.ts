import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsValueComponent } from './about-us-value.component';

describe('AboutUsValueComponent', () => {
  let component: AboutUsValueComponent;
  let fixture: ComponentFixture<AboutUsValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
