import {
    Directive,
    Input,
    ViewContainerRef,
    ComponentFactoryResolver,
    ComponentRef, ComponentFactory
} from '@angular/core';

import { IPagePart, PagePartType } from './page-about-me.types';
import { IPageAboutMeContentItem } from './content-items/page-about-me__content-item.interface';
import { PageAboutMeContentItemExperiencesComponent } from './content-items/page-about-me__content-item-experiences.component';
import { PageAboutMeContentItemAbilitiesComponent } from './content-items/page-about-me__content-item-abilities.component';
import { PageAboutMeContentItemContactComponent } from './content-items/page-about-me__content-item-contact.component';
import { PageAboutMeContentItemProfileComponent } from './content-items/page-about-me__content-item-profile.component';


@Directive({
    selector: '[paPageAboutMeContentItem]'
})
export class PageAboutMeContentItemDirective {

    @Input() set pagePart(pagePart: IPagePart<Object>) {
        this._pagePart = pagePart;
        this.loadItem();
    }

    @Input() set pagePartIndex(val: number) {
        this._pagePartIndex = val;
        this.loadItem();
    }

    private _pagePart: IPagePart<Object>;
    private _pagePartIndex: number;
    private loaded: boolean = false;

    constructor(private viewContainerRef: ViewContainerRef,
                private resolver: ComponentFactoryResolver) {
    }

    private loadItem() {

        if (this.canLoadItem()) {

            this.loaded = true;

            let componentFactory: ComponentFactory<IPageAboutMeContentItem<Object>>;

            switch (this._pagePart.type) {

                case PagePartType.Profile:
                    componentFactory =
                        this.resolver.resolveComponentFactory(PageAboutMeContentItemProfileComponent);
                    break;

                case PagePartType.Experiences:
                    componentFactory =
                        this.resolver.resolveComponentFactory(PageAboutMeContentItemExperiencesComponent);
                    break;

                case PagePartType.Abilities:
                    componentFactory =
                        this.resolver.resolveComponentFactory(PageAboutMeContentItemAbilitiesComponent);
                    break;

                case PagePartType.Contact:
                    componentFactory =
                        this.resolver.resolveComponentFactory(PageAboutMeContentItemContactComponent);
                    break;

                default:
                    return false;
            }

            const componentRef: ComponentRef<IPageAboutMeContentItem<Object>> =
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
