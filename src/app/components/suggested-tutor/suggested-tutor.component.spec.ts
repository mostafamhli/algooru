import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedTutorComponent } from './suggested-tutor.component';

describe('SuggestedTutorComponent', () => {
  let component: SuggestedTutorComponent;
  let fixture: ComponentFixture<SuggestedTutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestedTutorComponent]
    });
    fixture = TestBed.createComponent(SuggestedTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
