import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { takeUntil } from "rxjs/operators";
import { IObjectAttribut, IObjectInfo, IObjectsType } from "src/app/core.types";
import { ObjectsService } from "src/app/services/objects.service";
import { BaseComponent } from "../base.component";

@Component({
    selector: 'objects-edit-attrs',
    templateUrl: './objects-edit-attrs.component.html',
    styleUrls: ['./objects-edit-attrs.component.scss']
})
export class ObjectsEditAttrsComponent extends BaseComponent implements OnInit {
    @Input() objectInfo: IObjectInfo;

    @Output('create.object') objectCreate: EventEmitter<String> = new EventEmitter();

    attributesForm: FormGroup;
    selectType: FormControl = new FormControl('');
    objectsTypes: IObjectsType[];
    currentObjectsType: IObjectsType;

    constructor(
        private fb: FormBuilder,
        private objectsSvc: ObjectsService,
    ) {
        super();
    }

    ngOnInit(): void {
        this.objectsSvc.getObjectsTypes().pipe(
            takeUntil(this.unsubscribe),
        ).subscribe((objectsTypes: IObjectsType[]) => {
            this.objectsTypes = objectsTypes;
        });

        this.selectType.valueChanges.pipe(
            takeUntil(this.unsubscribe),
        ).subscribe((typeCode) => {
            this.currentObjectsType = this.objectsTypes.find((objectsType) => objectsType.code == typeCode);
            this.initAttributsForm(this.currentObjectsType.attributes);
        });

        if (this.objectInfo) {
            this.selectType.setValue(this.objectInfo.objectType);
        }
    }

    private initAttributsForm(attributes: IObjectAttribut[]) {
        this.attributesForm = this.fb.group(attributes.reduce((memo, attr) => {
            memo[attr.code] = [this.objectInfo?.attributes[attr.code]];
            return memo;
        }, {}));
    }

    saveObjectInfo() {
        this.objectsSvc.saveObjectState(null, {
            objectType: this.currentObjectsType.code,
            attributes: this.attributesForm.value,
        }).pipe(
            takeUntil(this.unsubscribe),
        ).subscribe((objectId) => {
            this.objectCreate.next(objectId);
            //this.router.navigate([`/objects/${objectId}`]);
        });
    }
}