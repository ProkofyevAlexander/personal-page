export enum PagePartType {
    Profile,
    Experiences,
    Abilities,
    Contact
}

export interface IPageParDataListItem {
    title: string;
    score: number;
}

export interface IPagePartAbilitiesDataSubPart {
    header: string;
    listItems: IPageParDataListItem[];
    projectInfo?: {
        description: string;
        url: string;
        btnText: string;
    };
}

export interface IPagePartAbilitiesData {
    header: string;
    subParts: IPagePartAbilitiesDataSubPart[];
}

export interface IPagePart<DataType> {
    name: string;
    type: PagePartType;
    data?: DataType;
}
