import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPictureModalComponent } from './user-picture-modal.component';

describe('UserPictureModalComponent', () => {
  let component: UserPictureModalComponent;
  let fixture: ComponentFixture<UserPictureModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPictureModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPictureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
