import { NgModule } from '@angular/core';
import { CornerstoneLibraryComponent } from './cornerstone-library.component';
import { ButtonsComponent } from './buttons/buttons.component';




@NgModule({
  declarations: [CornerstoneLibraryComponent, ButtonsComponent],
  imports: [
  ],
  exports: [CornerstoneLibraryComponent, ButtonsComponent]
})
export class CornerstoneLibraryModule { }
