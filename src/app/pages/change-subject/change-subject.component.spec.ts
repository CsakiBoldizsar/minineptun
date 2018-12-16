import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSubjectComponent } from './change-subject.component';

describe('ChangeSubjectComponent', () => {
  let component: ChangeSubjectComponent;
  let fixture: ComponentFixture<ChangeSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
