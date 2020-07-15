import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEntrepreneurshipComponent } from './my-entrepreneurship.component';

describe('MyEntrepreneurshipComponent', () => {
  let component: MyEntrepreneurshipComponent;
  let fixture: ComponentFixture<MyEntrepreneurshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEntrepreneurshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEntrepreneurshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
