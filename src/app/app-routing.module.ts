import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './KCIComponent/todos/todos.component';
import { AboutComponent } from './KCIComponent/about/about.component';
import { DownloadXlsComponent } from './KCIComponent/download-xls/download-xls.component';

const routes: Routes = [
  //{path:'',component: TodosComponent },
  {path:'about',component: AboutComponent },
  {path:'',component: DownloadXlsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
