import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'objects-edit',
  templateUrl: './objects-types.component.html',
  styleUrls: ['./objects-types.component.scss']
})
export class ObjectsTypesComponent {
  title = 'csp';
  items = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private router: Router) { }

  openObjectInfo(objectId) {
    this.router.navigate([`/objects/${objectId}`]);
  }
}