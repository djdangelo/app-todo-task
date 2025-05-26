import {Component, Input, ViewChild} from '@angular/core';
import {ITask} from "../../../../data/interfaces/task/task.interface";
import {Menu} from "primeng/menu";
import {MenuItem, Message} from "primeng/api";
import {TasksService} from "../../../../data/services/tasks/tasks.service";
import {IResponseApi} from "../../../../data/interfaces/response-api/response-api.interface";
import {Router} from "@angular/router";
import {SharedService} from "../../../../data/services/shared/shared.service";

@Component({
  selector: 'app-task-detail',
  standalone: false,
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent {
  @Input() taskList!: ITask[];
  @Input() title!: string;
  @Input() showMessageEmpty!: boolean;
  @ViewChild('menu') menu!: Menu;
  menuItems: MenuItem[] = [];
  messages!: Message[];
  clickedTask!: ITask;
  constructor(
    private taskService: TasksService,
    private router: Router,
    public sharedService: SharedService
  ) {
  }
  ngOnInit() {
    this.menuItems = [
      { label: 'Editar', icon: 'pi pi-pencil', command: () => this.onEdit() },
      { label: 'Eliminar', icon: 'pi pi-trash', command: () => this.handleDelete() }
    ];
  }
  private onEdit() {
    this.router.navigate([`/core/tasks/update-task/${this.clickedTask.id}`]);
  }
  private handleDelete() {
    this.taskService.delete(this.clickedTask.id || '').subscribe(
      (res: IResponseApi) => {
        this.messages = [
          { severity: 'success', detail: 'Task deleted successfully!' },
        ];
        this.sharedService.getTasks();
      },
      error => {
        console.log(error);
        this.messages = [
          { severity: 'error', detail: error.message +' '+ error.error.message },
        ]
      }
    )
  }
  toggleMenu(event: Event, task: ITask) {
    this.clickedTask = task;
    this.menu.toggle(event);
  }
  onCheckboxChange(event: any, task: ITask) {
    event.originalEvent.stopPropagation();
    if (event.checked) {
      task.status = true;
      this.taskService.update(task).subscribe(
        (res: IResponseApi) => {
          this.messages = [
            { severity: 'success', detail: 'Task completed!' },
          ];
          this.sharedService.getTasks();
        },
        (error) => {
          console.log(error);
          this.messages = [
            { severity: 'error', detail: error.message +' '+ error.error.message },
          ]
        }
      );
    }
  }
}
