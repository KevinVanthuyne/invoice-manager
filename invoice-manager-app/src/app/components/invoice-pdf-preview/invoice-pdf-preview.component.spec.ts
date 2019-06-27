import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePdfPreviewComponent } from './invoice-pdf-preview.component';

describe('InvoicePdfPreviewComponent', () => {
  let component: InvoicePdfPreviewComponent;
  let fixture: ComponentFixture<InvoicePdfPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicePdfPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicePdfPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
