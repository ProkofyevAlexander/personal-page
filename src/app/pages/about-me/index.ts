import { PageAboutMeComponent } from './page-about-me.component';
import { PageAboutMeContentComponent } from './page-about-me__content.component';
import { PageAboutMeHeadComponent } from './page-about-me__head.component';
import { PageAboutMeNavigationComponent } from './page-about-me__navigation.component';
import { PageAboutMeContentItemDirective } from './page-about-me__content-item.directive';

import {
    PAGE_ABOUT_ME_CONTENT_ITEMS_COMPONENTS,
    PAGE_ABOUT_ME_CONTENT_ITEMS_ENTRY_COMPONENTS
} from './content-items';

export { PageAboutMeComponent } from './page-about-me.component';
export { PageAboutMeContentComponent } from './page-about-me__content.component';
export { PageAboutMeHeadComponent } from './page-about-me__head.component';
export { PageAboutMeNavigationComponent } from './page-about-me__navigation.component';
export { PageAboutMeContentItemDirective } from './page-about-me__content-item.directive';

export const PAGE_ABOUT_ME_COMPONENTS: any[] =
    [
        PageAboutMeComponent,
        PageAboutMeContentComponent,
        PageAboutMeHeadComponent,
        PageAboutMeNavigationComponent,
        PageAboutMeContentItemDirective
    ].concat(PAGE_ABOUT_ME_CONTENT_ITEMS_COMPONENTS);

export const PAGE_ABOUT_ME_ENTRY_COMPONENTS: any[] =
    [].concat(PAGE_ABOUT_ME_CONTENT_ITEMS_ENTRY_COMPONENTS);
