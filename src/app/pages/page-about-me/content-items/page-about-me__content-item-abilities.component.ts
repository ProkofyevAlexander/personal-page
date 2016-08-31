import { Component, Input } from '@angular/core';

import { IPageAboutMeContentItem } from './page-about-me__content-item.interface';
import { IPagePart } from '../page-about-me.types';

@Component({
    selector: 'pa-page-about-me-content-item-abilities',
    template: 'Abilities {{ pagePartIndex }}'
})
export class PageAboutMeContentItemAbilitiesComponent implements IPageAboutMeContentItem {
    @Input() pagePart: IPagePart;
    @Input() pagePartIndex: number;
}
