import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDiscussionPointComponent } from './add-discussion-point.component';

describe('AddDiscussionPointComponent', () => {
  let component: AddDiscussionPointComponent;
  let fixture: ComponentFixture<AddDiscussionPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDiscussionPointComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddDiscussionPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
