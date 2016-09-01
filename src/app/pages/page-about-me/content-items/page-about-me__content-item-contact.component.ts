import { Component } from '@angular/core';

import { PageAboutMeContentItemBase } from './page-about-me__content-item-base';

@Component({
    selector: 'pa-page-about-me-content-item-abilities',
    template: require('./page-about-me__content-item-contact.pug'),
    styles: [
        require('./page-about-me__content-item.scss'),
        require('./page-about-me__content-item-contact.scss')
    ]
})
export class PageAboutMeContentItemContactComponent extends PageAboutMeContentItemBase {
}
