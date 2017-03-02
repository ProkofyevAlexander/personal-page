import {
    Component,
    AfterViewInit
} from '@angular/core';

require('../../assets/scss/layout.scss');

@Component({
    selector: 'pa-app',
    template: '<pa-page-about-me></pa-page-about-me>'
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
