import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaiwanRailwayComponent } from './taiwan-railway.component';

describe('TaiwanRailwayComponent', () => {
  let component: TaiwanRailwayComponent;
  let fixture: ComponentFixture<TaiwanRailwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaiwanRailwayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaiwanRailwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
