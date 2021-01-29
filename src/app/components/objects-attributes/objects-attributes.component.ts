import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, TemplateRef } from "@angular/core";
import { takeUntil } from "rxjs/operators";
import { IObjectInfo, IObjectsType } from "src/app/core.types";
import { ObjectsService } from "src/app/services/objects.service";
import { BaseComponent } from "../base.component";

export interface IAttributItem {
    code: string;
    type: string;
    caption: string;
    value: string;
}

@Component({
    selector: 'objects-attributes',
    templateUrl: './objects-attributes.component.html',
    styleUrls: ['./objects-attributes.component.scss']
})
export class ObjectsAttributesComponent extends BaseComponent implements OnInit, OnChanges {
    @Input() objectInfo: IObjectInfo;
    @Input() objectType: IObjectsType;
    @Input() template: string = 'listItem';
    @Input() actionsTemplate: TemplateRef<any>;

    @Output('object.click')
    public clickObject: EventEmitter<IObjectInfo> = new EventEmitter();

    attributes: Array<IAttributItem>;

    constructor(
        private objectsSvc: ObjectsService,
    ) {
        super();
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('objectInfo' in changes) {
            this.initObjectsType();
        }
    }

    initObjectsType() {
        this.objectsSvc.getObjectsType(this.objectInfo.objectType).pipe(
            takeUntil(this.unsubscribe),
        ).subscribe((objectType) => {
            this.objectType = objectType;
        });
    }
}