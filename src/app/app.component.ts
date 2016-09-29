import { Component } from '@angular/core';

import { PageAboutMeComponent } from './pages/about-me/page-about-me.component';

@Component({
    selector: 'pa-app',
    template: '<pa-page-about-me></pa-page-about-me>',
    directives: [PageAboutMeComponent]
})
export class AppComponent {
}
