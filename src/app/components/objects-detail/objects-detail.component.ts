import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { IObjectInfo, IObjectsType } from "src/app/core.types";
import { ObjectsService } from "src/app/services/objects.service";
import { BaseComponent } from "../base.component";

export enum FormModes {
  View, Edit
}

@Component({
  selector: 'objects-detail',
  templateUrl: './objects-detail.component.html',
  styleUrls: ['./objects-detail.component.scss'],
})
export class ObjectsDetailComponent extends BaseComponent implements OnInit {
  FormModes = FormModes;
  currentObjectId: string;

  links = [1, 2, 3, 4];

  objectInfo: IObjectInfo;
  objectType: IObjectsType;
  formMode: FormModes;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private objectsSvc: ObjectsService,
  ) {
    super();
  }

  ngOnInit(): void {

    this.route.paramMap.pipe(
      switchMap((params) => {
        this.currentObjectId = params.get('id');
        this.formMode = params.get('mode') == 'edit' ? FormModes.Edit : FormModes.View;

        if (params.get('id') === '0') return of([null, null]);
        return this.objectsSvc.getObjectById(params.get('id')).pipe(
          switchMap((objectInfo) => {
            return this.objectsSvc.getObjectsType(objectInfo.objectType).pipe(
              map((objectsType): [IObjectInfo, IObjectsType] => [objectInfo, objectsType]),
            );
          }),
        );
      }),
    ).subscribe(([objectInfo, objectsType]) => {
      this.objectInfo = objectInfo;
      this.objectType = objectsType;
    });

  }

  openObjectInfo(objectId: string) {
    this.router.navigate([`/objects/${objectId}`]);
  }

  editObjectInfo(objectId: string) {
    this.router.navigate([`/objects/edit/${objectId}`]);
  }

  addObjectInfo() {
    //this.currentObjectsType
  }

  onCreateObject(objectId: string) {
    console.log('objectId: ' + objectId);
    this.openObjectInfo(objectId);
  }

}