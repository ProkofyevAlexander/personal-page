import { Component, Input } from '@angular/core';

import { IPageAboutMeContentItem } from './page-about-me__content-item.interface';
import { IPagePart } from '../page-about-me.types';

@Component({
    selector: 'pa-page-about-me-content-item-profile',
    template: require('./page-about-me__content-item-profile.component.pug'),
    styles: [
        require('./page-about-me__content-item.component.scss'),
        require('./page-about-me__content-item-profile.component.scss')
    ]
})
export class PageAboutMeContentItemProfileComponent implements IPageAboutMeContentItem {
    @Input() pagePart: IPagePart;
    @Input() pagePartIndex: number;

    isHighlighted(): boolean {
        let result: boolean = false;

        if (this.pagePartIndex !== undefined) {
            result = this.pagePartIndex % 2 === 0;
        }
        return result;
    }
}
