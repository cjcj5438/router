import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Fater} from '../fater/fater.component';
import {Injectable} from '@angular/core';

@Injectable()
export class AjaxResolve implements Resolve<Fater> {
  constructor(private router: Router) {
  }

  // ActivatedRouteSnapshot 这个就是拿参数的对象
  resolve(route: ActivatedRouteSnapshot) {
    const productId: number = route.params['id'];
    console.log(productId);
    // tir
    if (productId == 1) {
      return new Fater(1, 'iphonex');
    } else {
      this.router.navigate(['/cdx']);
      return null;
    }
  }
}
