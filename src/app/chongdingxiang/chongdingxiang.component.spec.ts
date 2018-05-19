import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChongdingxiangComponent } from './chongdingxiang.component';

describe('ChongdingxiangComponent', () => {
  let component: ChongdingxiangComponent;
  let fixture: ComponentFixture<ChongdingxiangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChongdingxiangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChongdingxiangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
