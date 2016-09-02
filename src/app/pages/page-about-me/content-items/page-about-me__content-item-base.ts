import { Input } from '@angular/core';

import { IPageAboutMeContentItem } from './page-about-me__content-item.interface';
import { IPagePart } from '../page-about-me.types';

export class PageAboutMeContentItemBase<DataType> implements IPageAboutMeContentItem<DataType> {

    @Input() pagePart: IPagePart<DataType>;
    @Input() pagePartIndex: number;

    get data(): DataType {
        return this.pagePart.data;
    }

    isHighlighted(): boolean {
        let result: boolean = false;

        if (this.pagePartIndex !== undefined) {
            result = this.pagePartIndex % 2 === 0;
        }
        return result;
    }
}
