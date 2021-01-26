import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'objects-edit',
  templateUrl: './objects-edit.component.html',
  styleUrls: ['./objects-edit.component.scss']
})
export class ObjectsEditComponent {
  title = 'csp';
  items = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private router: Router) { }

  openObjectInfo(objectId) {
    this.router.navigate([`/objects/${objectId}`]);
  }
}