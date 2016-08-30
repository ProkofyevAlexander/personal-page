import { Component, Input } from '@angular/core';

import { IPageAboutMeContentItem } from './page-about-me__content-item.interface';
import { IPagePart } from '../page-about-me.types';

@Component({
    selector: 'pa-page-about-me-content-item',
    template: 'Profile {{ pagePartIndex }}'
})
export class PageAboutMeContentItemProfileComponent implements IPageAboutMeContentItem {
    @Input() pagePart: IPagePart;
    @Input() pagePartIndex: number;
}
