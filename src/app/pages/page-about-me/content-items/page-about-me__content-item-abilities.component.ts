import { Component } from '@angular/core';

import { PageAboutMeContentItemBaseComponent } from './page-about-me__content-item-base.component';

@Component({
    selector: 'pa-page-about-me-content-item-abilities',
    template: require('./page-about-me__content-item-abilities.component.pug'),
    styles: [
        require('./page-about-me__content-item.component.scss'),
        require('./page-about-me__content-item-abilities.component.scss')
    ]
})
export class PageAboutMeContentItemAbilitiesComponent extends PageAboutMeContentItemBaseComponent {
}
