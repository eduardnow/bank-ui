import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService) {
    }

    canActivate() {

        return true;

        /*if (!this.authService.isAuthenticated()) {
            this.authService.login();
        }

        return true;*/
    }
}