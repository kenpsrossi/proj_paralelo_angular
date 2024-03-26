import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimaisComponent } from './components/animais/animais.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'todos',
  },
  {
    path: 'todos', component: AnimaisComponent
  },
  {
    path: 'dogs', component: AnimaisComponent
  },
  {
    path: 'cats', component: AnimaisComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
