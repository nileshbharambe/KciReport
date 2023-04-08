import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './KCIComponent/todos/todos.component';
import { ModelItemComponent } from './KCIComponent/model-item/model-item.component';
import { AboutComponent } from './KCIComponent/about/about.component';
import { DownloadXlsComponent } from './KCIComponent/download-xls/download-xls.component';
import { DownloadXlsService } from './KCIComponent/service/download-xls.service';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ModelItemComponent,
    AboutComponent,
    DownloadXlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
