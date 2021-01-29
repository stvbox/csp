import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

interface ObjectsListPickerDialogData {

}

@Component({
    selector: 'objects-list-picker',
    templateUrl: './objects-list-picker.component.html',
})
export class ObjectsListPickerDialog {
    constructor(
        public dialogRef: MatDialogRef<ObjectsListPickerDialog>,
        @Inject(MAT_DIALOG_DATA) public data: ObjectsListPickerDialogData,
    ) { }

    onObjectClick(objectId: string) {
        this.dialogRef.close(objectId);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}