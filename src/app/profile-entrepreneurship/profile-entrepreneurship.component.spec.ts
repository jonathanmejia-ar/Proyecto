import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEntrepreneurshipComponent } from './profile-entrepreneurship.component';

describe('ProfileEntrepreneurshipComponent', () => {
  let component: ProfileEntrepreneurshipComponent;
  let fixture: ComponentFixture<ProfileEntrepreneurshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEntrepreneurshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEntrepreneurshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
