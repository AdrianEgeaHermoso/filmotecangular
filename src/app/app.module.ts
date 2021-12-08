import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import { CalendarComponent } from './calendar/calendar.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {MenuModule} from 'primeng/menu';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {TabMenuModule} from 'primeng/tabmenu';
import {ChartModule} from 'primeng/chart';
import {DataViewModule} from 'primeng/dataview';
import {FileUploadModule} from 'primeng/fileupload';





@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    CalendarModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AvatarModule,
    AvatarGroupModule,
    InputTextareaModule,
    PanelModule,
    TableModule,
    TabMenuModule,
    MenuModule,
    ChartModule,
    DataViewModule,
    FileUploadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
