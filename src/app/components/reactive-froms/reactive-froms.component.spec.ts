import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFromsComponent } from './reactive-froms.component';

describe('ReactiveFromsComponent', () => {
  let component: ReactiveFromsComponent;
  let fixture: ComponentFixture<ReactiveFromsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFromsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveFromsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
