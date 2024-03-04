import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './services/client.service';

//import { AppRoutingModule } from './app-routing.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};


@NgModule({
  declarations: [
    //AppComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    HttpClientModule
  ],
  providers: [ClientService],
  bootstrap: []// AppComponent
})
export class AppModule { }