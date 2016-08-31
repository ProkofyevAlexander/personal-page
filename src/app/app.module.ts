import { NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageAboutMeService } from './pages/page-about-me/page-about-me.service';
import { PageAboutMeContentItemProfileComponent } from './pages/page-about-me/content-items/page-about-me__content-item-profile.component';

const entryComponents: Type[] = [
    PageAboutMeContentItemProfileComponent
];

@NgModule({
    providers: [
        PageAboutMeService
    ],
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        entryComponents
    ],
    bootstrap: [AppComponent],
    entryComponents: entryComponents
})
export class AppModule {
}
