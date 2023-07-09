import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ReadfileComponent } from './components/readfile/readfile.component';
import { QeditComponent } from './components/pages/qedit/qedit.component';
import { QviewComponent } from './components/pages/qview/qview.component';
import { ParsingComponent } from './components/pages/parsing/parsing.component';
import { BankeditComponent } from './components/pages/bankedit/bankedit.component';
import { TestComponent } from './components/pages/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReadfileComponent,
    QeditComponent,
    QviewComponent,
    ParsingComponent,
    BankeditComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
