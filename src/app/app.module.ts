import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ViewPatternExamplesModule } from './view-pattern-examples/view-pattern-examples.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ViewPatternExamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
