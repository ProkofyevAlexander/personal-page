import { Input } from '@angular/core';

import { IPageAboutMeContentItem } from './page-about-me__content-item.interface';
import { IPagePart, IPageParDataListItem } from '../page-about-me.types';

export class PageAboutMeContentItemBase<DataType> implements IPageAboutMeContentItem<DataType> {

    @Input() pagePart: IPagePart<DataType>;
    @Input() pagePartIndex: number;

    private minColumnSize: number = 2;
    private columnsNum: number = 2;

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

    getListItemsColumns(listItems: IPageParDataListItem[]): IPageParDataListItem[][] {
        return [
            this.getListItemsFirstColumn(listItems),
            this.getListItemsSecondColumn(listItems)
        ];
    }

    private getListItemsFirstColumn(listItems: IPageParDataListItem[]): IPageParDataListItem[] {

        if (listItems.length > this.minColumnSize) {
            return listItems.slice(0, this.getColumnBorderListItem(listItems));
        }
        return listItems;
    }

    private getListItemsSecondColumn(listItems: IPageParDataListItem[]): IPageParDataListItem[] {

        if (listItems.length > this.minColumnSize) {
            return listItems.slice(this.getColumnBorderListItem(listItems), listItems.length);
        }
        return [];
    }

    private getColumnBorderListItem(listItems: IPageParDataListItem[]) {
        return Math.ceil(listItems.length / this.columnsNum);
    }
}
