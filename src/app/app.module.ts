import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CapitalisePipe } from './capitalise.pipe';
import { AppRouterModule } from './app.router.module';

@NgModule({
  declarations: [
    AppComponent,
    CapitalisePipe
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
