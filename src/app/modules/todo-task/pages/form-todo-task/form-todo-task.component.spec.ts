import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTodoTaskComponent } from './form-todo-task.component';

describe('FormTodoTaskComponent', () => {
  let component: FormTodoTaskComponent;
  let fixture: ComponentFixture<FormTodoTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTodoTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTodoTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
