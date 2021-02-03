import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { BaseComponent } from '../base.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends BaseComponent implements OnInit {
    form: any = {
        username: null,
        password: null
    };
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];

    constructor(
        private authSvc: AuthService,
    ) {
        super();
    }

    ngOnInit(): void {
        this.authSvc.getUserInfo().pipe(
            takeUntil(this.unsubscribe),
        ).subscribe((userInfo) => {
            this.isLoggedIn = userInfo.isAuthenticated;
        });
    }

    onSubmit(): void {
        const { username, password } = this.form;

        this.authSvc.login(username, password).pipe(
            takeUntil(this.unsubscribe),
        ).subscribe((data) => {
            this.authSvc.setUserInfo(data);
        }, (err) => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
        });
    }
}