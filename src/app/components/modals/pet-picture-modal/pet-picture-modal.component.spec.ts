import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetPictureModalComponent } from './pet-picture-modal.component';

describe('PetPictureModalComponent', () => {
  let component: PetPictureModalComponent;
  let fixture: ComponentFixture<PetPictureModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetPictureModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetPictureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
