import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { DemoComponent } from './demo/demo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DropComponent } from './drop/drop.component';
import { CatsComponent } from './cats/cats.component';
import { ConBackComponent } from './con-back/con-back.component';
import { CrudComponent } from './crud/crud.component';
import { SliderComponent } from './slider/slider.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  },
  { path: 'slider', component: SliderComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'drop', component: DropComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'con-back', component: ConBackComponent },
  { path: 'crud', component: CrudComponent },
];

export default routeConfig;