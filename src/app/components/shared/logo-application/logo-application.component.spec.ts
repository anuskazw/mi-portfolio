import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoApplicationComponent } from './logo-application.component';

describe('LogoApplicationComponent', () => {
  let component: LogoApplicationComponent;
  let fixture: ComponentFixture<LogoApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoApplicationComponent]
    });
    fixture = TestBed.createComponent(LogoApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
