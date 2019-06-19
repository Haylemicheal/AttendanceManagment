import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { InsertuserComponent } from './insertuser/insertuser.component';
import { FileListComponent } from './file-list/file-list.component';
import { Routes, RouterModule } from "@angular/router";
import { MenuComponent } from "./menu/menu.component";
import { AttendancerecordComponent } from "./attendancerecord/attendancerecord.component";
import { InsertAttendanceComponent } from "./insert-attendance/insert-attendance.component";
const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'user_upload',
    component: InsertuserComponent
  },
  {
    path: 'filelist',
    component: FileListComponent
  },
  {
    path: 'record',
    component: AttendancerecordComponent
  },
  {
    path: 'upload',
    component: InsertAttendanceComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    InsertuserComponent,
    FileListComponent,
    MenuComponent,
    AttendancerecordComponent,
    InsertAttendanceComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
