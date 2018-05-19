import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaterComponent } from './fater.component';

describe('FaterComponent', () => {
  let component: FaterComponent;
  let fixture: ComponentFixture<FaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
