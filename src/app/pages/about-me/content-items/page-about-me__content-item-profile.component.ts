import { Component } from '@angular/core';

import { PageAboutMeContentItemBase } from './page-about-me__content-item-base';
import { IPagePartProfileData } from '../page-about-me.types';

@Component({
    selector: 'pa-page-about-me-content-item-profile',
    templateUrl: './page-about-me__content-item-profile.pug',
    styleUrls: [
        './page-about-me__content-item.scss',
        './page-about-me__content-item-profile.scss'
    ]
})
export class PageAboutMeContentItemProfileComponent extends PageAboutMeContentItemBase<IPagePartProfileData> {
}
