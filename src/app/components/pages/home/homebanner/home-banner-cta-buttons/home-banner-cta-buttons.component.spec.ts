import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBannerCtaButtonsComponent } from './home-banner-cta-buttons.component';

describe('HomeBannerCtaButtonsComponent', () => {
  let component: HomeBannerCtaButtonsComponent;
  let fixture: ComponentFixture<HomeBannerCtaButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeBannerCtaButtonsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBannerCtaButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
