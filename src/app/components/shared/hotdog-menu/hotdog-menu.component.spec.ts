import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotdogMenuComponent } from './hotdog-menu.component';

describe('HotdogMenuComponent', () => {
  let component: HotdogMenuComponent;
  let fixture: ComponentFixture<HotdogMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotdogMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotdogMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
