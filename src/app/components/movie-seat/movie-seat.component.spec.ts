import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSeatComponent } from './movie-seat.component';

describe('MovieSeatComponent', () => {
  let component: MovieSeatComponent;
  let fixture: ComponentFixture<MovieSeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
