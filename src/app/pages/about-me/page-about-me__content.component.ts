import { Component } from '@angular/core';

import { PageAboutMeService } from './page-about-me.service';
import { IPagePart } from './page-about-me.types';

@Component({
    selector: 'pa-page-about-me-content',
    templateUrl: './page-about-me__content.pug',
    styleUrls: ['./page-about-me__content.scss']
})
export class PageAboutMeContentComponent {

    constructor(private pageAboutMeService: PageAboutMeService) {
    }

    get pageParts(): IPagePart<Object>[] {
        return this.pageAboutMeService.getPageParts();
    }

}
