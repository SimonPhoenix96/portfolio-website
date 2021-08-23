import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodSaysComponent } from './god-says.component';

describe('GodSaysComponent', () => {
  let component: GodSaysComponent;
  let fixture: ComponentFixture<GodSaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GodSaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GodSaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
