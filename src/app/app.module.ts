import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakService } from './keycloak/keycloak.service';
import { PostTestobjectsComponent } from './testobjects/post-testobjects/post-testobjects.component';
import { GetTestobjectsComponent } from './testobjects/get-testobjects/get-testobjects.component';
import { DeleteTestobjectsComponent } from './testobjects/delete-testobjects/delete-testobjects.component';

@NgModule({
  declarations: [
    AppComponent,
    PostTestobjectsComponent,
    GetTestobjectsComponent,
    DeleteTestobjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    KeycloakService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
