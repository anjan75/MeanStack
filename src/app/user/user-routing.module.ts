import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsercommonComponent } from './components/usercommon/usercommon.component';

const routes: Routes = [
  {path:"",component:UsercommonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
