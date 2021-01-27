import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";


@Component({ template: 'empty' })
export class BaseComponent implements OnDestroy {
    protected unsubscribe = new Subject();
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}