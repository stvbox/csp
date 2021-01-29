import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { takeUntil } from "rxjs/operators";
import { IObjectInfo, IObjectsType } from "src/app/core.types";
import { ObjectsService } from "src/app/services/objects.service";
import { BaseComponent } from "../base.component";
import { ObjectsListPickerDialog } from "../objects-list/objects-list-picker/objects-list-picker.component";
import { ObjectsListComponent } from "../objects-list/objects-list.component";

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

    constructor(
        private objectsSvc: ObjectsService,
        public dialogSvc: MatDialog,
    ) {
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
        console.log('create');

        const dialogRef = this.dialogSvc.open(ObjectsListPickerDialog);
        dialogRef.afterClosed().pipe(
            takeUntil(this.unsubscribe),
        ).subscribe((linkObjectId) => {
            this.objectsSvc.createLink(this.objectInfo.id, linkObjectId).pipe(
                takeUntil(this.unsubscribe),
            ).subscribe(() => this.initLinkObjects());
        });
    }

    initLinkObjects() {
        this.objectsSvc.getObjectsById(this.objectInfo.links).pipe(
            takeUntil(this.unsubscribe),
        ).subscribe((objects) => {
            this.links = [...objects];
        });
    }

    unlinkObject(linkedObjectId: string) {
        this.objectsSvc.removeLink(this.objectInfo.id, linkedObjectId).pipe(
            takeUntil(this.unsubscribe),
        ).subscribe(() => this.initLinkObjects());
    }
}