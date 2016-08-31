import { Input } from '@angular/core';

import { IPageAboutMeContentItem } from './page-about-me__content-item.interface';
import { IPagePart } from '../page-about-me.types';

export class PageAboutMeContentItemBaseComponent implements IPageAboutMeContentItem {

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
