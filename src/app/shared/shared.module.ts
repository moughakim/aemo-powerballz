import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SafeUrlPipe } from './safe-url.pipe';


@NgModule({
  declarations: [SafeUrlPipe],
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
    SafeUrlPipe
  ]
})
export class SharedModule { }
