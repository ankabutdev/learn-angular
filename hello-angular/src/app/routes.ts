import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { DemoComponent } from './demo/demo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DropComponent } from './drop/drop.component';
import { CatsComponent } from './cats/cats.component';
import { ConBackComponent } from './con-back/con-back.component';

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
  { path: 'demo', component: DemoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'drop', component: DropComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'con-back', component: ConBackComponent }
];

export default routeConfig;