import {CanActivate} from '@angular/router';

export class LoginGuard implements CanActivate {
  canActivate() {
    const loggedIn: boolean = Math.random() < 0.5;
    if (!loggedIn) {
      console.log('请点击 请尝试登陆');
    } else {
      console.log('ok');
    }
    return loggedIn;
  }
}
