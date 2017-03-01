import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IhFormComponent } from './ih-form/ih-form.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyAboutComponent } from './my-about/my-about.component';

import { RouterConfigurator } from './router.configurator';

@NgModule({
  declarations: [
    AppComponent,
    IhFormComponent,
    MyHomeComponent,
    MyAboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterConfigurator
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
