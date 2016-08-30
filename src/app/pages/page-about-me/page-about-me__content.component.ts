import { Component, OnInit } from '@angular/core';

import { PageAboutMeService } from './page-about-me.service';
import { IPagePart } from './page-about-me.types';
import { PageAboutMeContentItemComponent } from './page-about-me__content-item.component';

@Component({
    selector: 'pa-page-about-me-content',
    template: require('./page-about-me__content.component.pug'),
    styles: [require('./page-about-me__content.component.scss')],
    directives: [PageAboutMeContentItemComponent]
})
export class PageAboutMeContentComponent implements OnInit {

    pageParts: IPagePart[] = [];

    constructor(private pageAboutMeService: PageAboutMeService) {
    }

    ngOnInit() {
        this.pageParts = this.pageAboutMeService.getPageParts();
    }
}
