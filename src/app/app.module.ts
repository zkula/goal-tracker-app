import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PriorityComponent } from './priority/priority.component';
import { PriorityService } from './services/priority.service';
import { AddPriorityComponent } from './add-priority/add-priority.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PriorityComponent,
    AddPriorityComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PriorityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
