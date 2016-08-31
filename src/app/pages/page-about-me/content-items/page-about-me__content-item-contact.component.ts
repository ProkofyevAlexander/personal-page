import { Component } from '@angular/core';

import { PageAboutMeContentItemBaseComponent } from './page-about-me__content-item-base.component';

@Component({
    selector: 'pa-page-about-me-content-item-abilities',
    template: require('./page-about-me__content-item-contact.component.pug'),
    styles: [
        require('./page-about-me__content-item.component.scss'),
        require('./page-about-me__content-item-contact.component.scss')
    ]
})
export class PageAboutMeContentItemContactComponent extends PageAboutMeContentItemBaseComponent {
}
