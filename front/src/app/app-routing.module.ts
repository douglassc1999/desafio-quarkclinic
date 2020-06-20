import { HomeComponent } from './views/home/home.component';
import { ConfigComponent } from './views/config/config.component';
import { QueueComponent } from './components/queue/queue.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendadoHomeComponent } from './views/agendado-home/agendado-home.component'
import { ChegadaHomeComponent } from './views/chegada-home/chegada-home.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'chegada',
    component: ChegadaHomeComponent
  },
  {
    path: 'chegada/filas/:choose',
    component: QueueComponent
  },
  {
    path: 'agendado',
    component: AgendadoHomeComponent
  },
  {
    path: 'config',
    component: ConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
