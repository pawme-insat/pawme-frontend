import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBreedsComponent } from './user-breeds.component';

describe('UserBreedsComponent', () => {
  let component: UserBreedsComponent;
  let fixture: ComponentFixture<UserBreedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBreedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBreedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
