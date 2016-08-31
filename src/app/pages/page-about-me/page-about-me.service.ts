import { Injectable } from '@angular/core';

import { IPagePart, PagePartType } from './page-about-me.types';

@Injectable()
export class PageAboutMeService {

    pageParts: IPagePart[] = [];

    constructor() {

        this.pageParts = [
            {
                name: 'Profile',
                type: PagePartType.Profile
            },
            {
                name: 'Experiences',
                type: PagePartType.Experiences
            },
            {
                name: 'Abilities',
                type: PagePartType.Abilities
            },
            {
                name: 'Contact',
                type: PagePartType.Contact
            }
        ];
    }

    getPageParts(): IPagePart[] {
        return this.pageParts;
    }
}
