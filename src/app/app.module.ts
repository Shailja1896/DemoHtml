import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HighlightComponent } from './highlight/highlight.component';
import { IntroComponent } from './intro/intro.component';
import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';

import { Service } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HighlightComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    DxDataGridModule,
    DxTemplateModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
