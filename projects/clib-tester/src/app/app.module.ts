import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CornerstoneLibraryModule } from 'cornerstone-library';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CornerstoneLibraryModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
