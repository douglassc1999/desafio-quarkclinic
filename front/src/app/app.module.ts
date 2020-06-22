import { ConfigService } from './services/config.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChegadaHomeComponent } from './views/chegada-home/chegada-home.component';
import { AgendadoHomeComponent } from './views/agendado-home/agendado-home.component';
import { SelectorComponent } from './components/selector/selector.component';
import { MatCardModule } from '@angular/material/card';
import { QueueComponent } from './components/queue/queue.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http'
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { ConfigComponent } from './views/config/config.component';
import { HomeComponent } from './views/home/home.component';
import { SelectorAgendadoComponent } from './components/selector-agendado/selector-agendado.component';
import { ModalSearchAgendaComponent } from './components/selector-agendado/modal-search-agenda/modal-search-agenda.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ModalReportPacientComponent } from './components/selector-agendado/modal-report-pacient/modal-report-pacient.component';
import { NgxMaskModule } from 'ngx-mask';
import { LoginComponent } from './views/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    ChegadaHomeComponent,
    AgendadoHomeComponent,
    SelectorComponent,
    QueueComponent,
    ConfigComponent,
    HomeComponent,
    SelectorAgendadoComponent,
    ModalSearchAgendaComponent,
    ModalReportPacientComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    NgxMaskModule.forRoot(),
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [AuthService, AuthGuard, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
