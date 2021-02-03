import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, of, ReplaySubject } from 'rxjs';
import { catchError, filter, isEmpty, map, switchMap, tap } from 'rxjs/operators';


export interface IAuthResponse {
    isAuthenticated: boolean;
    userLogin?: string;
}

const AUTH_API = '/csp/api/auth/login';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    static changeUser: ReplaySubject<IAuthResponse> = new ReplaySubject(1);

    constructor(private httpSvc: HttpClient) {
        this.httpSvc.get('/csp/api/auth/login').subscribe((userInfo) => {
            AuthService.changeUser.next(userInfo as IAuthResponse);
        });
    }

    login(username: string, password: string): Observable<IAuthResponse> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            //'Authorization': "Basic " + btoa(username + ":" + password),
        });
        const body = `username=${username}&password=${password}`;
        const request = new HttpRequest('POST', AUTH_API, body, { headers, withCredentials: true });

        return this.httpSvc.request(request).pipe(
            filter((result) => result['body']),
            map((result) => result['body']),
            catchError((error) => {
                throw error;
            }),
        ) as Observable<IAuthResponse>;
    }

    logout() {
        this.httpSvc.get('/csp/api/auth/logout').subscribe(() => {
            AuthService.changeUser.next({ isAuthenticated: false });
        });
    }

    public setUserInfo(user: IAuthResponse): void {
        AuthService.changeUser.next(user);
    }

    public getUserInfo(): Observable<IAuthResponse> {
        return AuthService.changeUser;
    }
}