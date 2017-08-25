import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifeEventComponent } from './life-event.component';


const routes: Routes = [
  { path: '', component: LifeEventComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeEventRoutingModule { }
