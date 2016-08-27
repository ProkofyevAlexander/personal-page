import { Component } from '@angular/core';

import { PageAboutMeIndexComponent } from './pages/page-about-me/page-about-me-index.component';

@Component({
    selector: 'pa-my-app',
    template: '<pa-page-about-me-index></pa-page-about-me-index>',
    directives: [PageAboutMeIndexComponent]
})
export class AppComponent {
}
