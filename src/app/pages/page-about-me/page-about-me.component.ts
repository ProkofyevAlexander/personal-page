import { Component } from '@angular/core';

import { PageAboutMeHeadComponent } from './page-about-me__head.component';
import { PageAboutMeNavigationComponent } from './page-about-me__navigation.component';
import { PageAboutMeContentComponent } from './page-about-me__content.component';

@Component({
    selector: 'pa-page-about-me',
    template: require('./page-about-me.component.pug'),
    styles: [require('./page-about-me.component.scss')],
    directives: [
        PageAboutMeHeadComponent,
        PageAboutMeNavigationComponent,
        PageAboutMeContentComponent
    ]
})
export class PageAboutMeComponent {
}
