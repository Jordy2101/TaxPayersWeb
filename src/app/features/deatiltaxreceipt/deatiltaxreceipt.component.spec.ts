import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatiltaxreceiptComponent } from './deatiltaxreceipt.component';

describe('DeatiltaxreceiptComponent', () => {
  let component: DeatiltaxreceiptComponent;
  let fixture: ComponentFixture<DeatiltaxreceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeatiltaxreceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeatiltaxreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
