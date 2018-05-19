import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {Code404Component} from './code404/code404.component';
import {ChongdingxiangComponent} from './chongdingxiang/chongdingxiang.component';
import {FaterComponent} from './fater/fater.component';
import {ChildAComponent} from './child-a/child-a.component';
import {ChildBComponent} from './child-b/child-b.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    Code404Component,
    ChongdingxiangComponent,
    FaterComponent,
    ChildAComponent,
    ChildBComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
