import {
    Directive,
    Input,
    ViewContainerRef,
    ComponentFactoryResolver,
    ComponentRef
} from '@angular/core';

import { IPagePart } from './page-about-me.types';
import {
    PageAboutMeContentItemProfileComponent
} from './content-items/page-about-me__content-item-profile.component';
import {
    IPageAboutMeContentItem
} from './content-items/page-about-me__content-item.interface';

@Directive({
    selector: '[paPageAboutMeContentItem]'
})
export class PageAboutMeContentItemDirective {

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
                private resolver: ComponentFactoryResolver) {
    }

    private loadItem() {

        if (this.canLoadItem()) {

            this.loaded = true;

            const componentFactory = this.resolver.resolveComponentFactory(PageAboutMeContentItemProfileComponent);

            const componentRef: ComponentRef<IPageAboutMeContentItem> =
                this.viewContainerRef.createComponent(componentFactory);

            const component = componentRef.instance;
            component.pagePart = this._pagePart;
            component.pagePartIndex = this._pagePartIndex;
        }
    }

    private canLoadItem() {
        return this._pagePart !== undefined
            && this._pagePartIndex !== undefined
            && !this.loaded;
    }
}
