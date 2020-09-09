import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTestobjectsComponent } from './post-testobjects.component';

describe('PostTestobjectsComponent', () => {
  let component: PostTestobjectsComponent;
  let fixture: ComponentFixture<PostTestobjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTestobjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTestobjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
