import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { IObjectInfo, IObjectsType } from "src/app/core.types";
import { ObjectsService } from "src/app/services/objects.service";
import { BaseComponent } from "../base.component";

interface IAttributItem {
    code: string;
    type: string;
    caption: string;
    value: string;
}

@Component({
    selector: 'objects-preview',
    templateUrl: './objects-preview.component.html',
    styleUrls: ['./objects-preview.component.scss']
})
export class ObjectsPreviewComponent extends BaseComponent implements OnInit {
    @Input() objectInfo: IObjectInfo;
    @Input() objectType: IObjectsType;
    @Input() template: string = 'listItem';

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
}