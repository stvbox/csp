import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { AttrValueTypes, DeletedFlag, IObjectInfo, IObjectStateParams, IObjectsType } from "../core.types";

const MOCK_OBJECTS: IObjectInfo[] = [{
    id: '1',
    objectType: 'firstCode',
    attributes: {
        attr1: 'attr11213123',
        attr2: 'attr222222222',
        attr3: 'attr33333333',
        attr4: 'attr4444444',
    }
}, {
    id: '2',
    objectType: 'secondCode',
    attributes: {
        attr1123: 'Один атрибут',
        attr3522: 'Второй атрибут',
    }
}];

const MOCK_OBJECTS_TYPES: IObjectsType[] = [{
    code: 'firstCode',
    name: 'Первый тип объектов',
    attributes: [
        { code: 'attr1', name: 'аттрибут1', type: AttrValueTypes.String, deleted: DeletedFlag.N },
        { code: 'attr2', name: 'аттрибут2', type: AttrValueTypes.Number, deleted: DeletedFlag.N },
        { code: 'attr3', name: 'аттрибут3', type: AttrValueTypes.Date, deleted: DeletedFlag.Y },
        { code: 'attr4', name: 'аттрибут4', type: AttrValueTypes.String, deleted: DeletedFlag.Y },
    ],
}, {
    code: 'secondCode',
    name: 'Второй другой тип объектов',
    attributes: [
        { code: 'attr1123', name: 'аттрибут другой', type: AttrValueTypes.String, deleted: DeletedFlag.N },
        { code: 'attr3522', name: 'аттрибут прочий', type: AttrValueTypes.Date, deleted: DeletedFlag.Y },
    ],
}];

@Injectable({
    providedIn: 'root',
})
export class ObjectsService {

    getObjectById(objectId: string): Observable<IObjectInfo> {
        return this.getObjects().pipe(
            map((objects) => {
                return objects.find((object) => object.id == objectId) as IObjectInfo;
            }),
        );
    }

    getObjects(): Observable<IObjectInfo[]> {
        return of(MOCK_OBJECTS);
    }

    saveObjectState(objectId: string, state: IObjectStateParams): Observable<any> {
        if (objectId === null) {
            objectId = String(MOCK_OBJECTS.length + 1);
            MOCK_OBJECTS.push({
                id: String(objectId),
                objectType: state.objectType,
            } as IObjectInfo);
        }

        const object = MOCK_OBJECTS.find((object) => object.id == objectId);

        if (state.attributes) {
            object.attributes = state.attributes;
        }

        return of(objectId);
    }

    getObjectsTypes(): Observable<IObjectsType[]> {
        return of(MOCK_OBJECTS_TYPES);
    }

    getObjectsType(typeCode: string): Observable<IObjectsType> {
        return of(MOCK_OBJECTS_TYPES.find((type) => type.code == typeCode));
    }

}