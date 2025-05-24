import {Component} from '@angular/core';
import {LayoutService} from "./service/app.layout.service";
import {globalApp} from "../data/constants/global.variable.constant";

@Component({
  selector: 'app-footer',
  templateUrl: './app.footer.component.html',
  standalone: false,
})
export class AppFooterComponent {
    currentYear = new Date().getFullYear();

    appName: string = globalApp.nameApp;

    constructor(public layoutService: LayoutService) {}

    get colorScheme(): string {
        return this.layoutService.config().colorScheme;
    }
}
