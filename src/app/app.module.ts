import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { UnitServiceComponent } from './33depending-injection/unit-service.component';
import { PipeComponent } from './34pipe/pipe.component';
import { FileSizePipe } from './34pipe/filesize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    UnitServiceComponent,
    PipeComponent,
    FileSizePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
