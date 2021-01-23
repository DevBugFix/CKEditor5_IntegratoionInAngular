import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MyCkEditorComponent } from './my-ck-editor/my-ck-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCkEditorComponent
  ],
  imports: [
    BrowserModule,
    CKEditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
