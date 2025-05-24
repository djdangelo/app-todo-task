import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    standalone: false,
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Dashboard', icon: 'pi pi-home',
                items: [
                    { label: 'Inicio', icon: 'pi pi-desktop', routerLink: ['/'] },
                ]
            },
          {
            label: 'Tareas', icon: 'fa-solid fa-list-check',
            items: [
              { label: 'Lista de tareas', icon: 'pi pi-bars', routerLink: ['tasks/list-tasks'] },
            ]
          },
        ];
    }
}
