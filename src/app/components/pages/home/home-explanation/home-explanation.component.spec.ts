import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExplanationComponent } from './home-explanation.component';

describe('HomeExplanationComponent', () => {
  let component: HomeExplanationComponent;
  let fixture: ComponentFixture<HomeExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeExplanationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
