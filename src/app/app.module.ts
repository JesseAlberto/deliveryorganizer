import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NavComponent } from './components/main-layout/nav/nav.component';
import { DeliveriesViewComponent } from './components/main-layout/deliveries-view/deliveries-view.component';
import { DeliveriesCreateComponent } from './components/main-layout/deliveries-create/deliveries-create.component';
import { DeliveriesPrintComponent } from './components/main-layout/deliveries-print/deliveries-print.component';
import { DeliveriesListComponent } from './components/main-layout/deliveries-list/deliveries-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NavComponent,
    DeliveriesViewComponent,
    DeliveriesCreateComponent,
    DeliveriesPrintComponent,
    DeliveriesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DragDropModule,
    SwiperModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
