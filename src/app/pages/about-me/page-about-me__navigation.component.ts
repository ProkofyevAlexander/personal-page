import {
    Component,
    AfterViewInit
} from '@angular/core';

import { IPagePart } from './page-about-me.types';
import { PageAboutMeService } from './page-about-me.service';

@Component({
    selector: 'pa-page-about-me-navigation',
    template: require('./page-about-me__navigation.pug'),
    styleUrls: ['./page-about-me__navigation.scss']
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

        $(window).on('activate.bs.scrollspy', function (e) {
            history.replaceState(null, null, $('a[href^="#"]', e.target).attr('href'));
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
