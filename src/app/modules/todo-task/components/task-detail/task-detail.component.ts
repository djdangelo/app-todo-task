import {Component, Input, ViewChild} from '@angular/core';
import {ITask} from "../../../../data/interfaces/task/task.interface";
import {Menu} from "primeng/menu";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-task-detail',
  standalone: false,
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent {
  @Input() taskList!: ITask[];
  @Input() title!: string;
  @ViewChild('menu') menu!: Menu;
  menuItems: MenuItem[] = [];

  clickedTask!: ITask;

  ngOnInit() {
    this.menuItems = [
      { label: 'Editar', icon: 'pi pi-pencil', command: () => this.onEdit() },
      { label: 'Eliminar', icon: 'pi pi-trash', command: () => this.handleDelete() }
    ];
  }

  private onEdit() {
    return undefined;
  }

  private handleDelete() {
    return undefined;
  }

  parseDate(date: string) {
    let d = new Date(date);
    return d.toUTCString().split(' ').slice(1, 3).join(' ');
  }

  toggleMenu(event: Event, task: ITask) {
    this.clickedTask = task;
    this.menu.toggle(event);
  }
  onCheckboxChange(event: any, task: ITask) {
    event.originalEvent.stopPropagation();
    //task.completed = event.checked;
    //this.taskService.markAsCompleted(task);
  }
}
