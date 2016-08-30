import { Component } from '@angular/core';

import { PageAboutMeComponent } from './pages/page-about-me/page-about-me.component';

@Component({
    selector: 'pa-my-app',
    template: '<pa-page-about-me></pa-page-about-me>',
    directives: [PageAboutMeComponent]
})
export class AppComponent {
}
