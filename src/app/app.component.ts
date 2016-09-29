import {
    Component,
    AfterViewInit
} from '@angular/core';

import { PageAboutMeComponent } from './pages/about-me/page-about-me.component';

declare var $: JQueryStatic;

@Component({
    selector: 'pa-app',
    template: '<pa-page-about-me></pa-page-about-me>',
    directives: [PageAboutMeComponent]
})
export class AppComponent implements AfterViewInit {

    ngAfterViewInit() {
        this.applyMailTo();
    }

    private applyMailTo() {

        $('a[href*="mailto"]').on('click', function () {

            let lstrEmail = $(this).attr('href').replace('mailto:', '');

            lstrEmail = lstrEmail.split('').reverse().join('');

            $(this).attr('href', 'mailto:' + lstrEmail);
        });
    };
}
