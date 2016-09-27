import {
    Component,
    AfterViewInit
} from '@angular/core';

import { IPagePart } from './page-about-me.types';
import { PageAboutMeService } from './page-about-me.service';

@Component({
    selector: 'pa-page-about-me-navigation',
    template: require('./page-about-me__navigation.pug'),
    styles: [require('./page-about-me__navigation.scss')]
})
export class PageAboutMeNavigationComponent implements AfterViewInit {

    navBarIsFixed: boolean = false;
    navBarCollapsed: boolean = true;

    constructor(private pageAboutMeService: PageAboutMeService) {
    }

    ngAfterViewInit() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > window.innerHeight) {
                this.navBarIsFixed = true;
            } else {
                this.navBarIsFixed = false;
            }
        });
    }

    get pageParts(): IPagePart<Object>[] {
        return this.pageAboutMeService.getPageParts();
    }
}
