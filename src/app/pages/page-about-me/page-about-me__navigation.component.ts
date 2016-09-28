import {
    Component,
    AfterViewInit
} from '@angular/core';

import { IPagePart } from './page-about-me.types';
import { PageAboutMeService } from './page-about-me.service';

declare var $: JQueryStatic;

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

        $('body').scrollspy({ target: '#navbar' });

        window.addEventListener('scroll', () => {
            this.navBarIsFixed = window.scrollY > window.innerHeight;
        });

        $('#navbar a').on('click', function (event) {

            console.log(event);

            if (this.hash !== '') {

                event.preventDefault();

                const hash: string = this.hash;

                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 300, () => {
                    window.location.hash = hash;
                });
            }
        });
    }

    get pageParts(): IPagePart<Object>[] {
        return this.pageAboutMeService.getPageParts();
    }
}
