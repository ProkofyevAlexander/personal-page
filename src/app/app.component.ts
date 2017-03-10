import {
    Component,
    AfterViewInit
} from '@angular/core';

import '../../assets/scss/layout.scss';

@Component({
    selector: 'pa-app',
    templateUrl: './app.component.pug'
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
