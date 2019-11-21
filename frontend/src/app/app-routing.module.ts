import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { ClassDetailsComponent } from './pages/class-details/class-details.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'classes',
    component: ClassesComponent
  },
  {
    path: 'classes/:id',
    component: ClassDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
