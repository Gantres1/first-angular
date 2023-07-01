import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QeditComponent } from './qedit.component';

describe('QeditComponent', () => {
  let component: QeditComponent;
  let fixture: ComponentFixture<QeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QeditComponent]
    });
    fixture = TestBed.createComponent(QeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
