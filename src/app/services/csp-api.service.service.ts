import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root',
})
export class CspApiService {
    constructor(private httpSvc: HttpClient) { }

    get(url: string): any {
        return this.httpSvc.get(url, { withCredentials: true }).pipe(
            tap((result) => {
                console.log(' -------- ');
                console.log(result);
            }),
        );
    }

}