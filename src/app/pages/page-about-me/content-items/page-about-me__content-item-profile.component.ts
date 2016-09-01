import { Component } from '@angular/core';

import { PageAboutMeContentItemBase } from './page-about-me__content-item-base';

@Component({
    selector: 'pa-page-about-me-content-item-profile',
    template: require('./page-about-me__content-item-profile.component.pug'),
    styles: [
        require('./page-about-me__content-item.scss'),
        require('./page-about-me__content-item-profile.component.scss')
    ]
})
export class PageAboutMeContentItemProfileComponent extends PageAboutMeContentItemBase {
}
