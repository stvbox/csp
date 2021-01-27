import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { BaseComponent } from "../base.component";
import { takeUntil } from "rxjs/operators";
import { AttrValueTypes, DeletedFlag, IObjectAttribut, IObjectsType } from "src/app/core.types";
import { ObjectsService } from "src/app/services/objects.service";

@Component({
  selector: 'objects-edit',
  templateUrl: './objects-types.component.html',
  styleUrls: ['./objects-types.component.scss']
})
export class ObjectsTypesComponent extends BaseComponent implements OnInit {
  DeletedFlag = DeletedFlag;
  AttrValueTypes = AttrValueTypes;
  Object = Object;

  currentType: IObjectsType;

  newObjectTypes: IObjectsType;
  objectTypes: IObjectsType[] = [];

  objectTypeForm: FormGroup;
  attributeForm: FormGroup;
  selectType: FormControl = new FormControl('');

  constructor(
    private objectsSvc: ObjectsService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    super();

    this.objectTypeForm = fb.group({
      code: { value: '', disabled: false },
      name: { value: '', disabled: false },
    });

    this.attributeForm = fb.group({
      code: { value: '', disabled: false },
      name: { value: '', disabled: false },
      type: { value: AttrValueTypes.String, disabled: false },
    });
  }

  ngOnInit(): void {
    this.selectType.valueChanges.pipe(
      takeUntil(this.unsubscribe),
    ).subscribe((typeCode) => {
      this.currentType = this.objectTypes.find((objectsType) => objectsType.code == typeCode);
    });

    this.objectsSvc.getObjectsTypes().pipe(
      takeUntil(this.unsubscribe),
    ).subscribe((types) => {
      this.objectTypes = types;
    });
  }

  openObjectInfo(objectId) {
    this.router.navigate([`/objects/${objectId}`]);
  }

  addObjectType() {
    this.newObjectTypes = {
      code: 'code',
      name: 'name',
      attributes: [],
    };
  }

  addAttribut() {
    const attribute: IObjectAttribut = {
      code: this.attributeForm.controls['code'].value,
      name: this.attributeForm.controls['name'].value,
      type: this.attributeForm.controls['type'].value,
      deleted: DeletedFlag.N,
    };

    this.currentType.attributes.push(attribute);
    this.attributeForm.reset();
  }

  saveObjectType() {
    const objectType: IObjectsType = {
      code: this.objectTypeForm.controls['code'].value,
      name: this.objectTypeForm.controls['name'].value,
      attributes: [],
    };

    this.objectTypes.push(objectType);
    this.newObjectTypes = null;
    this.objectTypeForm.reset();

    this.selectType.setValue(objectType.code);
  }

  cancelObjectType() {
    this.newObjectTypes = null;
    this.objectTypeForm.reset();
  }

  deleteAttribut(attr: IObjectAttribut) {

  }

}