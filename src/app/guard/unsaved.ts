import {CanDeactivate} from '@angular/router';
import {FaterComponent} from '../fater/fater.component';

export class UnsavedGuard implements CanDeactivate<FaterComponent> {
  canDeactivate(component: FaterComponent) {
    return window.confirm('还没有保存确定要离开嘛？');
  }

}
