import { Component } from '@angular/core';

import { PageAboutMeContentItemBase } from './page-about-me__content-item-base';
import { IPagePartExperiencesData } from '../page-about-me.types';

@Component({
    selector: 'pa-page-about-me-content-item-experiences',
    templateUrl: './page-about-me__content-item-experiences.pug',
    styleUrls: [
        './page-about-me__content-item.scss',
        './page-about-me__content-item-experiences.scss'
    ]
})
export class PageAboutMeContentItemExperiencesComponent extends PageAboutMeContentItemBase<IPagePartExperiencesData> {
}
