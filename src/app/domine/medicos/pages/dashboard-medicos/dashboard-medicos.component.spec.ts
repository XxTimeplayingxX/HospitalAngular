import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMedicosComponent } from './dashboard-medicos.component';

describe('DashboardMedicosComponent', () => {
  let component: DashboardMedicosComponent;
  let fixture: ComponentFixture<DashboardMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardMedicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
