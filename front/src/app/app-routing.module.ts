import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './views/login/login.component';
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
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'chegada',
    component: ChegadaHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'chegada/filas/:choose',
    component: QueueComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'agendado',
    component: AgendadoHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'config',
    component: ConfigComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
