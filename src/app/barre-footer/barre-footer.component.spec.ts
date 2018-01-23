import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreFooterComponent } from './barre-footer.component';

describe('BarreFooterComponent', () => {
  let component: BarreFooterComponent;
  let fixture: ComponentFixture<BarreFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarreFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarreFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
