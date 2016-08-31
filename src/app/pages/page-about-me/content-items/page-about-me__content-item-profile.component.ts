import { Component } from '@angular/core';

import { PageAboutMeContentItemBaseComponent } from './page-about-me__content-item-base.component';

@Component({
    selector: 'pa-page-about-me-content-item-profile',
    template: require('./page-about-me__content-item-profile.component.pug'),
    styles: [
        require('./page-about-me__content-item.component.scss'),
        require('./page-about-me__content-item-profile.component.scss')
    ]
})
export class PageAboutMeContentItemProfileComponent extends PageAboutMeContentItemBaseComponent {
}
