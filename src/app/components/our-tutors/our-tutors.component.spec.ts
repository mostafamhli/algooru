import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTutorsComponent } from './our-tutors.component';

describe('OurTutorsComponent', () => {
  let component: OurTutorsComponent;
  let fixture: ComponentFixture<OurTutorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurTutorsComponent]
    });
    fixture = TestBed.createComponent(OurTutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
