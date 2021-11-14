import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTaiwanRailwayComponent } from './m-taiwan-railway.component';

describe('MTaiwanRailwayComponent', () => {
  let component: MTaiwanRailwayComponent;
  let fixture: ComponentFixture<MTaiwanRailwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MTaiwanRailwayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MTaiwanRailwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
