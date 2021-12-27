import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadManagerComponent } from './read.component';

describe('ReadManagerComponent', () => {
  let component: ReadManagerComponent;
  let fixture: ComponentFixture<ReadManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
