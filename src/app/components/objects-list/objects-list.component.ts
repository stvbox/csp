import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'objects-list',
  templateUrl: './objects-list.component.html',
  styleUrls: ['./objects-list.component.scss']
})
export class ObjectsListComponent {
  title = 'csp';
  items = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private router: Router) { }

  openObjectInfo(objectId) {
    this.router.navigate([`/objects/${objectId}`]);
  }
}