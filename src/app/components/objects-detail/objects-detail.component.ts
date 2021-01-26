import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'objects-detail',
  templateUrl: './objects-detail.component.html',
  styleUrls: ['./objects-detail.component.scss']
})
export class ObjectsDetailComponent {
  title = 'csp';
  items = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private router: Router) { }

  openObjectInfo(objectId) {
    this.router.navigate([`/objects/${objectId}`]);
  }
}