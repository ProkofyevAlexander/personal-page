import { Injectable } from '@angular/core';

import {
    IPagePart,
    PagePartType,
    IPagePartAbilitiesData, IPagePartProfileData
} from './page-about-me.types';

import { pagePartAbilitiesData } from './page-data/page-about-me-page-part-abilities-data';
import { pagePartProfileData } from './page-data/page-about-me-page-part-profile-data';

declare type DataType = IPagePartAbilitiesData|Object;

@Injectable()
export class PageAboutMeService {

    pageParts: IPagePart<DataType>[] = [];

    constructor() {

        const pagePartProfile: IPagePart<IPagePartProfileData> = {
            name: 'Profile',
            type: PagePartType.Profile,
            data: pagePartProfileData
        };

        const pagePartAbilities: IPagePart<IPagePartAbilitiesData> = {
            name: 'Abilities',
            type: PagePartType.Abilities,
            data: pagePartAbilitiesData
        };

        this.pageParts = [
            pagePartProfile,
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
