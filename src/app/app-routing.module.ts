import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPriorityComponent } from './add-priority/add-priority.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'new', component: AddPriorityComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
