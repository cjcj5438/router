import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId: number;

  // ActivatedRoute 这个是接受路由上面的参数时注入的对象
  constructor(private routeInfo: ActivatedRoute) {
  }

  // 在初始化的时执行
  ngOnInit() {
    // 参数订阅以后 声明一个匿名函数 , 是rxjs里面的方法;
    this.routeInfo.params.subscribe((params: Params) => {
      this.productId = params['id'];
    });

    // snapshot 这个是参数快照
    this.productId = this.routeInfo.snapshot.queryParams['id'];
  }

}
