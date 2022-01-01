import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationItemMobileComponent } from './navigation-item-mobile.component';

describe('NavigationItemMobileComponent', () => {
  let component: NavigationItemMobileComponent;
  let fixture: ComponentFixture<NavigationItemMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationItemMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationItemMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
