import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoursePageComponent } from './admin-course-page.component';

describe('AdminCoursePageComponent', () => {
  let component: AdminCoursePageComponent;
  let fixture: ComponentFixture<AdminCoursePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCoursePageComponent]
    });
    fixture = TestBed.createComponent(AdminCoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
