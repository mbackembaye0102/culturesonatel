import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {TestComponent} from './test/test.component';
import { CreateComponent } from './pages/apprenants/create/create.component';
import { ListComponent } from './pages/apprenants/list/list.component';
import { AddsessionComponent } from './pages/admin/addsession/addsession.component';
import { AddcritereComponent } from './pages/admin/addcritere/addcritere.component';
import { AddadminComponent } from './pages/admin/addadmin/addadmin.component';
import { EvaluationComponent } from './pages/evaluation/evaluation.component';
import { DetailComponent } from './pages/apprenants/detail/detail.component';
import { EditpasswordComponent } from './editpassword/editpassword.component';
import { AddgroupComponent } from './pages/admin/addgroup/addgroup.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"test",component:TestComponent},
  {path:"createuser",component:CreateComponent},
  {path:"listuser",component:ListComponent},
  {path:"session",component:AddsessionComponent},
  {path:"critere",component:AddcritereComponent},
  {path:"admin",component:AddadminComponent},
  {path:"evaluation",component:EvaluationComponent},
  {path:"detailuser",component:DetailComponent},
  {path:"editpassword",component:EditpasswordComponent},
  {path:"groupe",component:AddgroupComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
