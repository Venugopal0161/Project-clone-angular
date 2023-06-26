import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviecategorysComponent } from './moviecategorys.component';

describe('MoviecategorysComponent', () => {
  let component: MoviecategorysComponent;
  let fixture: ComponentFixture<MoviecategorysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviecategorysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviecategorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
