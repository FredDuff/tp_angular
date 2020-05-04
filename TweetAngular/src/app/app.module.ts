import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwListComponent } from './component/tw-list/tw-list.component';
import { TwFormAddComponent } from './component/tw-form-add/tw-form-add.component';
import { TwEditComponent } from './component/tw-edit/tw-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TwListComponent,
    TwFormAddComponent,
    TwEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
