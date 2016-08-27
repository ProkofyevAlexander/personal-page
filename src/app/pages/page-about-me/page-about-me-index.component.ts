import { Component } from '@angular/core';

import { PageAboutMeHeadComponent } from './page-about-me-head.component';

@Component({
    selector: 'pa-page-about-me-index',
    template: '<pa-page-about-me-head></pa-page-about-me-head>',
    directives: [PageAboutMeHeadComponent]
})
export class PageAboutMeIndexComponent {
}
