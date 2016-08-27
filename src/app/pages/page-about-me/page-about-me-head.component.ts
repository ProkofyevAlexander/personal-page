import { Component } from '@angular/core';

@Component({
    selector: 'pa-page-about-me-head',
    template: `
<div class="jumbotron"
    data-src="/img/main.gif"
    data-position="center center">
    <div class="container">
        <h1>Prokofyev Alexander</h1>
        <p class="lead">Web developer</p>
    </div>
    <div class="overlay"></div>
    <a href="profile" class="scroll-down">
        <span class="glyphicon glyphicon-chevron-down"></span>
    </a>
</div>`,
    styles: [require('./page-about-me-head.scss')]
})
export class PageAboutMeHeadComponent {
}
