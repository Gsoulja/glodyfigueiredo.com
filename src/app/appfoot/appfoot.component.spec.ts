import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppfootComponent } from './appfoot.component';

describe('AppfootComponent', () => {
  let component: AppfootComponent;
  let fixture: ComponentFixture<AppfootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppfootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppfootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
