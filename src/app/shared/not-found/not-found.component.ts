import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule, ButtonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
