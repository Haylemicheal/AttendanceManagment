import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancerecordComponent } from './attendancerecord.component';

describe('AttendancerecordComponent', () => {
  let component: AttendancerecordComponent;
  let fixture: ComponentFixture<AttendancerecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendancerecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendancerecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
