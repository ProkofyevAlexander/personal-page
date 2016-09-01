import {
    Component
} from '@angular/core';

import { IPagePart } from './page-about-me.types';
import { PageAboutMeService } from './page-about-me.service';

declare var $: JQueryStatic;

@Component({
    selector: 'pa-page-about-me-navigation',
    template: require('./page-about-me__navigation.pug'),
    styles: [ require('./page-about-me__navigation.scss') ]
})
export class PageAboutMeNavigationComponent {

    constructor(private pageAboutMeService: PageAboutMeService) {
    }

    get pageParts(): IPagePart[] {
        return this.pageAboutMeService.getPageParts();
    }
}
