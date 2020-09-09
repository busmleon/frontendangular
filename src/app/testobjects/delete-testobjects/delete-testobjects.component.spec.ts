import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTestobjectsComponent } from './delete-testobjects.component';

describe('DeleteTestobjectsComponent', () => {
  let component: DeleteTestobjectsComponent;
  let fixture: ComponentFixture<DeleteTestobjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTestobjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTestobjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
