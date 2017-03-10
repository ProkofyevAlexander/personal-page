import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageAboutMeService } from './pages/about-me/page-about-me.service';
import { PageAboutMeComponent } from './pages/about-me/page-about-me.component';
import { PageAboutMeContentComponent } from './pages/about-me/page-about-me__content.component';
import { PageAboutMeHeadComponent } from './pages/about-me/page-about-me__head.component';
import { PageAboutMeNavigationComponent } from './pages/about-me/page-about-me__navigation.component';
import { PageAboutMeContentItemDirective } from './pages/about-me/page-about-me__content-item.directive';
import {
    PageAboutMeContentItemAbilitiesComponent
} from './pages/about-me/content-items/page-about-me__content-item-abilities.component';
import {
    PageAboutMeContentItemContactComponent
} from './pages/about-me/content-items/page-about-me__content-item-contact.component';
import {
    PageAboutMeContentItemExperiencesComponent
} from './pages/about-me/content-items/page-about-me__content-item-experiences.component';
import {
    PageAboutMeContentItemProfileComponent
} from './pages/about-me/content-items/page-about-me__content-item-profile.component';

@NgModule({
    providers: [
        PageAboutMeService
    ],
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        PageAboutMeComponent,
        PageAboutMeContentComponent,
        PageAboutMeHeadComponent,
        PageAboutMeNavigationComponent,
        PageAboutMeContentItemDirective,
        PageAboutMeContentItemAbilitiesComponent,
        PageAboutMeContentItemContactComponent,
        PageAboutMeContentItemExperiencesComponent,
        PageAboutMeContentItemProfileComponent
    ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        PageAboutMeContentItemAbilitiesComponent,
        PageAboutMeContentItemContactComponent,
        PageAboutMeContentItemExperiencesComponent,
        PageAboutMeContentItemProfileComponent
    ]
})
export class AppModule {
}
