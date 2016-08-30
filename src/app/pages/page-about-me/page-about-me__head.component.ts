import {
    Component,
    AfterViewInit,
    ViewChild,
    ElementRef
} from '@angular/core';

declare var $: JQueryStatic;

@Component({
    selector: 'pa-page-about-me-head',
    template: require('./page-about-me__head.component.pug'),
    styles: [ require('./page-about-me__head.component.scss') ]
})
export class PageAboutMeHeadComponent implements AfterViewInit {

    @ViewChild('jumbotron') jumbotronRef: ElementRef;

    ngAfterViewInit() {
        const $jumbotron = $(this.jumbotronRef.nativeElement);
        const $window = $(window);

        const setJumbotronHeight = () => {
            $jumbotron.css({
                height: $window.height() + 'px'
            });
        };

        setJumbotronHeight();

        $window.on('resize', function () {
            setJumbotronHeight();
        });
    }
}
