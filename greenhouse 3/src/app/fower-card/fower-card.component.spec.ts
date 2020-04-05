import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FowerCardComponent } from './fower-card.component';

describe('FowerCardComponent', () => {
  let component: FowerCardComponent;
  let fixture: ComponentFixture<FowerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FowerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FowerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
