import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import {CourseNavigatorServiceClient} from './services/CourseNavigatorServiceClient';

@NgModule({
  declarations: [
    AppComponent,
    WhiteboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CourseNavigatorServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
