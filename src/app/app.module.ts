import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthService} from './service/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { InterceptorService } from './interceptor.service';
import { CreateComponent } from './pages/apprenants/create/create.component';
import { ListComponent } from './pages/apprenants/list/list.component';
import { AddsessionComponent } from './pages/admin/addsession/addsession.component';
import { AddcritereComponent } from './pages/admin/addcritere/addcritere.component';
import { AddadminComponent } from './pages/admin/addadmin/addadmin.component';
import { EvaluationComponent } from './pages/evaluation/evaluation.component';
import {MaterialModule} from './material/material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    CreateComponent,
    ListComponent,
    AddsessionComponent,
    AddcritereComponent,
    AddadminComponent,
    EvaluationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [AuthService,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:InterceptorService,
    multi:true
  }

],
  bootstrap: [AppComponent]
})
export class AppModule { }
