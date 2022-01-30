import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetPictureBannerComponent } from './pet-picture-banner.component';

describe('PetPictureBannerComponent', () => {
  let component: PetPictureBannerComponent;
  let fixture: ComponentFixture<PetPictureBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetPictureBannerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetPictureBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
