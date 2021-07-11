import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveriesPrintComponent } from './deliveries-print.component';

describe('DeliveriesPrintComponent', () => {
  let component: DeliveriesPrintComponent;
  let fixture: ComponentFixture<DeliveriesPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveriesPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveriesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
