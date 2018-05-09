import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {Code404Component} from './code404/code404.component';

const routes: Routes = [
  // 不加加 / 是为什么灵活的使用相对路径和绝对路径 Routes
  {path: '', component: HomeComponent},
  {path: 'product', component: ProductComponent},
  {path: '**', component: Code404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
