import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeManagerComponent } from './compose.component';

describe('ComposeManagerComponent', () => {
  let component: ComposeManagerComponent;
  let fixture: ComponentFixture<ComposeManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposeManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
