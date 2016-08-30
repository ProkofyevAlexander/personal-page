export enum PagePartType {
    Profile,
    Experiences,
    Abilities,
    Contact
}

export interface IPagePart {
    name: string;
    type: PagePartType;
}
