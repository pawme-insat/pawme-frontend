import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedPetComponent } from './connected-pet.component';

describe('ConnectedPetComponent', () => {
  let component: ConnectedPetComponent;
  let fixture: ComponentFixture<ConnectedPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConnectedPetComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
