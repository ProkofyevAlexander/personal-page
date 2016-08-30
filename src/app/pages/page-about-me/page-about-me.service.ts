import { Injectable } from '@angular/core';

import { IPagePart, PagePartType } from './page-about-me.types';

@Injectable()
export class PageAboutMeService {

    getPageParts(): IPagePart[] {
        return [
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
}
