import { Component } from '@angular/core';

import { PageAboutMeContentItemBase } from './page-about-me__content-item-base';

@Component({
    selector: 'pa-page-about-me-content-item-abilities',
    templateUrl: './page-about-me__content-item-contact.pug',
    styleUrls: [
        './page-about-me__content-item.scss',
        './page-about-me__content-item-contact.scss'
    ]
})
export class PageAboutMeContentItemContactComponent extends PageAboutMeContentItemBase<Object> {
}
