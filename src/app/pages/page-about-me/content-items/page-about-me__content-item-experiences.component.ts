import { Component } from '@angular/core';

import { PageAboutMeContentItemBaseComponent } from './page-about-me__content-item-base.component';

@Component({
    selector: 'pa-page-about-me-content-item-experiences',
    template: require('./page-about-me__content-item-experiences.component.pug'),
    styles: [
        require('./page-about-me__content-item.component.scss'),
        require('./page-about-me__content-item-experiences.component.scss')
    ]
})
export class PageAboutMeContentItemExperiencesComponent extends PageAboutMeContentItemBaseComponent {
}
