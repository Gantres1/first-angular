import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParsingComponent } from './parsing.component';

describe('ParsingComponent', () => {
  let component: ParsingComponent;
  let fixture: ComponentFixture<ParsingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParsingComponent]
    });
    fixture = TestBed.createComponent(ParsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
