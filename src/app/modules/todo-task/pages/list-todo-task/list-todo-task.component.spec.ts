import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTodoTaskComponent } from './list-todo-task.component';

describe('ListTodoTaskComponent', () => {
  let component: ListTodoTaskComponent;
  let fixture: ComponentFixture<ListTodoTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTodoTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTodoTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
