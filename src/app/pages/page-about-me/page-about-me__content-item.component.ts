import {
    Component,
    Input,
    ViewContainerRef,
    ComponentResolver,
    ComponentRef
} from '@angular/core';

import { IPagePart } from './page-about-me.types';
import {
    PageAboutMeContentItemProfileComponent
} from './content-items/page-about-me__content-item-profile.component';
import {
    IPageAboutMeContentItem
} from './content-items/page-about-me__content-item.interface';

@Component({
    selector: 'pa-page-about-me-content-item',
    template: ''
})
export class PageAboutMeContentItemComponent {

    @Input() set pagePart(pagePart: IPagePart) {
        this._pagePart = pagePart;
        this.loadItem();
    }

    @Input() set pagePartIndex(val: number) {
        this._pagePartIndex = val;
        this.loadItem();
    }

    private _pagePart: IPagePart;
    private _pagePartIndex: number;
    private loaded: boolean = false;

    constructor(private viewContainerRef: ViewContainerRef,
                private componentResolver: ComponentResolver) {
    }

    private loadItem() {

        if (this.canLoadItem()) {

            this.loaded = true;

            this.componentResolver.resolveComponent(PageAboutMeContentItemProfileComponent)
                .then(componentFactory => {
                    const componentRef: ComponentRef<IPageAboutMeContentItem> =
                        this.viewContainerRef.createComponent(componentFactory);
                    const component = componentRef.instance;
                    component.pagePart = this._pagePart;
                    component.pagePartIndex = this._pagePartIndex;
                });
        }
    }

    private canLoadItem() {
        return this._pagePart !== undefined
            && this._pagePartIndex !== undefined
            && !this.loaded;
    }
}
