import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaxReceiptComponent } from './add-tax-receipt.component';

describe('AddTaxReceiptComponent', () => {
  let component: AddTaxReceiptComponent;
  let fixture: ComponentFixture<AddTaxReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaxReceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaxReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
