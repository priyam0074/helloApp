import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingAddModalComponent } from './billing-add-modal.component';

describe('BillingAddModalComponent', () => {
  let component: BillingAddModalComponent;
  let fixture: ComponentFixture<BillingAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
