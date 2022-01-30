import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetInfoBannerComponent } from './pet-info-banner.component';

describe('PetInfoBannerComponent', () => {
  let component: PetInfoBannerComponent;
  let fixture: ComponentFixture<PetInfoBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetInfoBannerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetInfoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
