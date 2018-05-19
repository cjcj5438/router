import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {Code404Component} from './code404/code404.component';
import {ChongdingxiangComponent} from './chongdingxiang/chongdingxiang.component';
import {FaterComponent} from './fater/fater.component';
import {ChildBComponent} from './child-b/child-b.component';
import {ChildAComponent} from './child-a/child-a.component';
import {ChatComponent} from './chat/chat.component';
import {LoginGuard} from './guard/login.guard';
import {UnsavedGuard} from './guard/unsaved';
import {AjaxResolve} from './guard/Ajax.resolve';


const routes: Routes = [
  // 不加加 / 是为什么灵活的使用相对路径和绝对路径 Routes
  // 默认主页
  {path: '', redirectTo: 'cdx', pathMatch: 'full'},
  // 参数
  {path: 'home/:name', component: HomeComponent},
  {path: 'product', component: ProductComponent},
  {path: 'productNavigate/:id', component: ProductComponent},
  // 重定向
  {path: 'cdx', component: ChongdingxiangComponent},
  // 子路由
  {
    path: 'fater/:id', component: FaterComponent, children: [
      {path: '', component: ChildAComponent},
      {path: 'b/:id', component: ChildBComponent},
    ],
    // 路由守卫1， 依赖注入
    // 路由进入之前
    // canActivate: [LoginGuard],
    // 路由离开之前
    // canDeactivate: [UnsavedGuard]
    resolve: {
      fater: AjaxResolve
    }
  },
  // 辅助路由 chat`
  {path: 'chat', component: ChatComponent, outlet: 'aux'},
  // 错误跳转
  {path: '**', component: Code404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // 路由守卫2， 依赖注入
  providers: [
    // LoginGuard,
    // UnsavedGuard,
    AjaxResolve
  ]
})
export class AppRoutingModule {
}
