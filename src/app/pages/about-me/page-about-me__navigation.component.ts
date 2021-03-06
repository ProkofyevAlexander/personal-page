import {
    Component,
    AfterViewInit
} from '@angular/core';

import { IPagePart } from './page-about-me.types';
import { PageAboutMeService } from './page-about-me.service';

@Component({
    selector: 'pa-page-about-me-navigation',
    templateUrl: './page-about-me__navigation.pug',
    styleUrls: ['./page-about-me__navigation.scss']
})
export class PageAboutMeNavigationComponent implements AfterViewInit {

    navBarIsFixed: boolean = false;
    navBarCollapsed: boolean = true;

    constructor(private pageAboutMeService: PageAboutMeService) {
    }

    ngAfterViewInit() {

        let $body = $('html, body');

        $('body').scrollspy({ target: '#navbar' });

        window.addEventListener('scroll', () => {
            this.navBarIsFixed = window.scrollY > window.innerHeight;
        });

        $(window).on('activate.bs.scrollspy', function (e) {
            history.replaceState(null, null, $('a[href^="#"]', e.target).attr('href'));
        });

        $('#navbar').on('click', 'a', function (event) {

            if (this.hash !== '') {

                event.preventDefault();

                const hash: string = this.hash;

                $body.animate({
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
