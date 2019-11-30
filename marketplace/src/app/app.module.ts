import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageModule } from "primeng/message";
import { MessagesModule } from "primeng/messages";
import { ProductoFormComponent } from './view/producto-form/producto-form.component';
import { ProductoListComponent } from './view/producto-list/producto-list.component';
import { ParentComponent } from './view/parent.component';
import { HomeComponent } from './view/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ProductoFormComponent,
    ProductoListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MessageModule,
		MessagesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
