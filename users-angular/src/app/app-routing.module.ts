import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailUserComponent } from './components/detail-user/detail-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';


const routes: Routes = [
  {
    path: '',//Como se va a llamar la ruta
    redirectTo: 'users/list',
    pathMatch: 'full'
  },
  {
    path: 'users/list',
    component: ListUsersComponent
  },
  {
    path: 'users/detail-user/:id',
    component: DetailUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
