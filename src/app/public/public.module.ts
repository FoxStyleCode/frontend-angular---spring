import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { BodyComponent } from './components/body/body.component';
import { PublicComponent } from './public.component';


@NgModule({
  declarations: [
    PublicComponent,
    BodyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
  ],
})
export class PublicModule {}
