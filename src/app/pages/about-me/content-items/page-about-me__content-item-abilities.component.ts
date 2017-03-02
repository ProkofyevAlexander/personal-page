import { Component } from '@angular/core';

import { PageAboutMeContentItemBase } from './page-about-me__content-item-base';
import {
    IPagePartAbilitiesData,
    IPageParDataListItem
} from '../page-about-me.types';

@Component({
    selector: 'pa-page-about-me-content-item-abilities',
    template: require('./page-about-me__content-item-abilities.pug'),
    styleUrls: [
        './page-about-me__content-item.scss',
        './page-about-me__content-item-abilities.scss'
    ]
})
export class PageAboutMeContentItemAbilitiesComponent extends PageAboutMeContentItemBase<IPagePartAbilitiesData> {

    private minColumnSize: number = 2;
    private columnsNum: number = 2;

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
