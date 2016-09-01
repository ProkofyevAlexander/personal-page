import { Component } from '@angular/core';

import { PageAboutMeService } from './page-about-me.service';
import { IPagePart } from './page-about-me.types';
import { PageAboutMeContentItemDirective } from './page-about-me__content-item.directive';

@Component({
    selector: 'pa-page-about-me-content',
    template: require('./page-about-me__content.pug'),
    styles: [require('./page-about-me__content.scss')],
    directives: [PageAboutMeContentItemDirective]
})
export class PageAboutMeContentComponent {

    constructor(private pageAboutMeService: PageAboutMeService) {
    }

    get pageParts(): IPagePart[] {
        return this.pageAboutMeService.getPageParts();
    }

}
