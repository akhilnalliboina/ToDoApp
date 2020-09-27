import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToaddComponent } from './toadd.component';

describe('ToaddComponent', () => {
  let component: ToaddComponent;
  let fixture: ComponentFixture<ToaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
