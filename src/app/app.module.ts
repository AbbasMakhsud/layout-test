import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {RoutingModule} from './routing/routing.module';
import { ProductViewComponent } from './pages/product-view/product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
