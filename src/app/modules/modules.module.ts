import { NgModule } from '@angular/core';

import { ModulesRoutingModule } from './modules-routing.module';
import {AppLayoutModule} from "../layout/app.layout.module";


@NgModule({
  declarations: [],
  imports: [
    AppLayoutModule,
    ModulesRoutingModule,
  ]
})
export class ModulesModule { }
