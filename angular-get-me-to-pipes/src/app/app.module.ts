import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InitialsPipe } from './initials.pipe';
//we use external feature or functionality so we have to import it in app.modules
@NgModule({
  declarations: [
    AppComponent,
    InitialsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
