export enum PagePartType {
    Profile,
    Experiences,
    Abilities,
    Contact
}

export interface IPagePartProfileData {
    header: string;
    lead: string;
    aboutMe: {
        header: string;
        paragraphs: string[]
    };
    detail: {
        header: string;
        fullNameLabel: string;
        fullName: string;
        ageLabel: string;
        age: string;
        locationLabel: string;
        location: string;
    };
}

export interface IPagePartExperiencesData {
    header: string;
    educationsHeader: string;
    educations: {
        university: string;
        period: string
        faculty: string;
        qualification: string;
        location: string;
    }[];
    careersHeader: string;
    careers: {
        company: string;
        period: string;
        position: string;
        siteUrl?: string;
        siteUrlText?: string;
        role: string;
        sites?: {
            text: string;
            urlText: string;
            url: string;
        }[];
    }[];
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
