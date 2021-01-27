import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { takeUntil } from "rxjs/operators";
import { IObjectInfo, IObjectsType } from "src/app/core.types";
import { ObjectsService } from "src/app/services/objects.service";
import { BaseComponent } from "../base.component";

@Component({
  selector: 'objects-list',
  templateUrl: './objects-list.component.html',
  styleUrls: ['./objects-list.component.scss']
})
export class ObjectsListComponent extends BaseComponent implements OnInit {
  title = 'csp';
  objectsTypesByCode: { [index: string]: IObjectsType };
  objects: IObjectInfo[];

  constructor(
    private objectsSvc: ObjectsService,
    private router: Router,
  ) {
    super();
  }

  ngOnInit(): void {
    this.objectsSvc.getObjects().pipe(
      takeUntil(this.unsubscribe),
    ).subscribe((objects) => {
      this.objects = objects;
    });

    this.objectsSvc.getObjectsTypes().pipe(
      takeUntil(this.unsubscribe),
    ).subscribe((objectTypes) => {
      this.objectsTypesByCode = objectTypes.reduce((memo, type) => {
        memo[type.code] = type;
        return memo;
      }, {});
    });
  }

  openObjectInfo(object: IObjectInfo) {
    this.router.navigate([`/objects/${object.id}`]);
  }

  createObject() {
    this.router.navigate([`/objects/edit/0`]);
  }

}