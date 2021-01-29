import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from "@angular/core";
import { takeUntil } from "rxjs/operators";
import { IObjectInfo, IObjectsType } from "src/app/core.types";
import { ObjectsService } from "src/app/services/objects.service";
import { BaseComponent } from "../base.component";

@Component({
    selector: 'objects-links',
    templateUrl: './objects-links.component.html',
    styleUrls: ['./objects-links.component.scss']
})
export class ObjectsLinksComponent extends BaseComponent implements OnInit, OnChanges {
    @Input() objectInfo: IObjectInfo;
    @Input() objectType: IObjectsType;

    @Output('link.click') clickLink: EventEmitter<string> = new EventEmitter();

    links: IObjectInfo[];

    constructor(private objectsSvc: ObjectsService,) {
        super();
    }

    ngOnInit(): void {

    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('objectInfo' in changes) {
            this.initLinkObjects();
        }
    }

    addObjectLink() {

    }

    initLinkObjects() {
        this.objectsSvc.getObjectsById(this.objectInfo.links).pipe(
            takeUntil(this.unsubscribe),
        ).subscribe((objects) => {
            this.links = objects;
        });
    }

    unlinkObject(objectId: string) {
        console.log('objectId: ' + objectId);
    }
}