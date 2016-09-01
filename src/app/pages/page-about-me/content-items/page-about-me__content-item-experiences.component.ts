import { Component } from '@angular/core';

import { PageAboutMeContentItemBase } from './page-about-me__content-item-base';

@Component({
    selector: 'pa-page-about-me-content-item-experiences',
    template: require('./page-about-me__content-item-experiences.pug'),
    styles: [
        require('./page-about-me__content-item.scss'),
        require('./page-about-me__content-item-experiences.scss')
    ]
})
export class PageAboutMeContentItemExperiencesComponent extends PageAboutMeContentItemBase {
}
