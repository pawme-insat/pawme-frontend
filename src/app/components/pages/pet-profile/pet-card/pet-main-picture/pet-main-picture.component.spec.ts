import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetMainPictureComponent } from './pet-main-picture.component';

describe('PetMainPictureComponent', () => {
  let component: PetMainPictureComponent;
  let fixture: ComponentFixture<PetMainPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetMainPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetMainPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
