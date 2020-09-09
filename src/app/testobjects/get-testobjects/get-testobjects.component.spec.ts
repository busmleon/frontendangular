import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTestobjectsComponent } from './get-testobjects.component';

describe('GetTestobjectsComponent', () => {
  let component: GetTestobjectsComponent;
  let fixture: ComponentFixture<GetTestobjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetTestobjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTestobjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
