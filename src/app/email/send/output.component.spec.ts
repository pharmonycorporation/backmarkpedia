import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxManagerComponent } from './output.component';

describe('InboxManagerComponent', () => {
  let component: InboxManagerComponent;
  let fixture: ComponentFixture<InboxManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboxManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
