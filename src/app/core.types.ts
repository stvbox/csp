export enum AttrValueTypes {
    String = 'string',
    Number = 'number',
    Date = 'date',
}

export enum DeletedFlag {
    Y = 'y',
    N = 'n',
}

export interface IObjectAttribut {
    code: string;
    name: string;
    type: string;
    deleted: DeletedFlag;
}

export interface IObjectsType {
    code: string;
    name: string;
    attributes: IObjectAttribut[];
}

export interface IObjectStateParams {
    objectType?: string;
    attributes?: {
        [index: string]: any;
    };
};

export interface IObjectInfo {
    id: string;
    objectType: string;
    attributes: { [index: string]: any };
    links: string[];
}