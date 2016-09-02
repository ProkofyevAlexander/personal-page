import { Injectable } from '@angular/core';

import {
    IPagePart,
    PagePartType,
    IPagePartAbilitiesData
} from './page-about-me.types';

import { pagePartAbilitiesData } from './page-data/page-about-me-page-part-abilities-data';

declare type DataType = IPagePartAbilitiesData|Object;

@Injectable()
export class PageAboutMeService {

    pageParts: IPagePart<DataType>[] = [];

    constructor() {

        const pagePartAbilities: IPagePart<IPagePartAbilitiesData> = {
            name: 'Abilities',
            type: PagePartType.Abilities,
            data: pagePartAbilitiesData
        };

        this.pageParts = [
            {
                name: 'Profile',
                type: PagePartType.Profile
            },
            {
                name: 'Experiences',
                type: PagePartType.Experiences
            },
            pagePartAbilities,
            {
                name: 'Contact',
                type: PagePartType.Contact
            }
        ];
    }

    getPageParts(): IPagePart<DataType>[] {
        return this.pageParts;
    }
}
