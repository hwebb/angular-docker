import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EmptyRouterComponent } from './empty-router.component';

const routes: Routes = [
  {
    path: '',
    component: EmptyRouterComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
