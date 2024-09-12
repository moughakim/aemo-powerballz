import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SafeUrlPipe } from './safe-url.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';


@NgModule({
  declarations: [SafeUrlPipe, SafeHtmlPipe],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  exports:[
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SafeUrlPipe,
    SafeHtmlPipe
  ]
})
export class SharedModule { }
