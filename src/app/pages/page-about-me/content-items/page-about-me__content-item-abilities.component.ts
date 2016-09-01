import { Component } from '@angular/core';

import { PageAboutMeContentItemBase } from './page-about-me__content-item-base';

@Component({
    selector: 'pa-page-about-me-content-item-abilities',
    template: require('./page-about-me__content-item-abilities.pug'),
    styles: [
        require('./page-about-me__content-item.scss'),
        require('./page-about-me__content-item-abilities.scss')
    ]
})
export class PageAboutMeContentItemAbilitiesComponent extends PageAboutMeContentItemBase {
}
