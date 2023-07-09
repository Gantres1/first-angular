import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankeditComponent } from './bankedit.component';

describe('BankeditComponent', () => {
  let component: BankeditComponent;
  let fixture: ComponentFixture<BankeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankeditComponent]
    });
    fixture = TestBed.createComponent(BankeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
